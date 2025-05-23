import { createId } from './utils/id';
import { getDbClient } from "./utils/db";

import {
    TestData,
    ParsedFeature,
    ParsedScenario,
    ParsedStep,
} from "./types";

import {
    FeatureTag,
    ScenarioTag,
    ScenarioStep,
    RunFeature,
    RunScenario,
    RunStep,
    Status
} from "@prisma/client";

import { synchronizeFeatures } from "./synchronize-features";
import { collectFeatures } from "./collect-features";

import { synchronizeScenarios } from "./synchronize-scenarios";
import { collectScenarios } from './collect-scenarios';

import { synchronizeSteps } from "./synchronize-steps";
import { collectSteps } from './collect-steps';

import { synchronizeTags } from "./synchronize-tags";
import { collectTags } from "./collect-tags";

import { collectStepsResults } from './collect-steps-results';

export const scenarioMap = new Map<string, string>();

const saveResults = async (
    runId: string,
    browser: string,
    platform: string,
    environment: string,
    databaseUrl: string,
    testData: TestData
): Promise<void> => {

    const maskString = (str: string) => {
        if (str.length <= 8) return '*'.repeat(str.length);
        return str.slice(0, 12) + '*'.repeat(12) + str.slice(-12);
    };

    console.log(`
        Run ID: ${runId}, 
        Browser: ${browser}, 
        Platform: ${platform}, 
        Env: ${environment}, 
        DB: ${maskString(databaseUrl)}
    `);

    const dbClient = getDbClient(databaseUrl);

    await synchronizeTags(testData, databaseUrl);
    await synchronizeFeatures(testData, databaseUrl);

    const tags = collectTags(testData);
    const features = await collectFeatures(testData, databaseUrl);
    const scenarios = await collectScenarios(testData, databaseUrl);

    if (!tags) {
        console.error("❌ Ошибка: collectTags вернул undefined");
        return;
    }

    if (!features) {
        console.error("❌ Ошибка: collectFeatures вернул undefined");
        return;
    }

    if (!scenarios) {
        console.error("❌ Ошибка: collectScenarios вернул undefined");
        return;
    }

    testData.forEach((feature, featureIndex) => {
        feature.elements.forEach((scenario, scenarioIndex) => {
            const scenarioData = scenarios[featureIndex * feature.elements.length + scenarioIndex];

            if (!scenarioData) {
                console.error(`❌ Ошибка: сценарий ${scenario.name} не найден в collectScenarios`);
                return;
            }

            if (!scenario.id) {
                console.error(`❌ Ошибка: у сценария ${scenario.name} отсутствует ID`);
                return;
            }

            scenarioMap.set(scenario.id, scenarioData.id);
        });
    });

    const steps = await collectSteps(testData, databaseUrl);
    await synchronizeSteps(steps, databaseUrl);

    const stepResults = await collectStepsResults(testData);

    let featuresCount = 0;
    let scenariosCount = 0;
    let stepsCount = 0;

    let passCount = 0;
    let failCount = 0;
    let skipCount = 0;
    let status = 'passed';
    let duration = 0;
    let totalScenarios = 0;

    for (const scenario of stepResults) {
        let scenarioFailed = false;
        let scenarioPassed = false;
        let scenarioSkipped = true;

        for (const step of scenario.steps) {
            duration += step.duration;

            if (step.status === "failed") {
                if (!scenarioFailed) {
                    failCount++;
                    scenarioFailed = true;
                }
            } else if (step.status === "skipped") {
                scenarioSkipped = scenarioSkipped && true;
            } else if (step.status === "passed") {
                scenarioPassed = true;
                scenarioSkipped = false;
            }
        }

        if (scenarioSkipped) {
            skipCount++;
        } else if (!scenarioFailed) {
            passCount++;
        }

        totalScenarios++;
    }

    if (status !== 'failed') {
        status = 'passed';
    }

    const featuresToCreate: ParsedFeature[] = [];
    const scenariosToCreate: ParsedScenario[] = [];
    const stepsToCreate: ParsedStep[] = [];

    const featureTagsToCreate: FeatureTag[] = [];
    const scenarioTagsToCreate: ScenarioTag[] = [];
    const scenarioStepsToCreate: ScenarioStep[] = [];

    const runFeaturesToCreate: RunFeature[] = [];
    const runScenariosToCreate: RunScenario[] = [];
    const runStepsToCreate: RunStep[] = [];

    const tagsSet = new Set<string>(tags.map(tag => tag.name.trim()));

    const tagsInDb = await dbClient.tag.findMany();
    const tagMap = new Map(tagsInDb.map(tag => [tag.name.trim(), tag.id]));

    for (const feature of features) {
        featuresCount++;

        const featureTags = feature.tags?.connect.map(tag => tag.id) || [];
        const featureDescription = feature.description || '';

        let featureId = feature.id;

        const existingFeature = await dbClient.feature.findFirst({ where: { name: feature.name.trim() } });

        if (existingFeature) {
            featureId = existingFeature.id;
            if (existingFeature.keyword !== feature.keyword || existingFeature.description !== featureDescription) {
                await dbClient.feature.update({
                    where: { id: featureId },
                    data: { keyword: feature.keyword, description: featureDescription }
                });
            }
        } else {
            await dbClient.feature.create({
                data: { id: featureId, keyword: feature.keyword, name: feature.name, description: featureDescription }
            });
        }

        featuresToCreate.push({ id: featureId, keyword: feature.keyword, name: feature.name, description: featureDescription });

        let featureStatus: Status = 'passed';

        for (const tagId of featureTags) {
            featureTagsToCreate.push({ featureId, tagId });
        }

        const originalFeature = testData.find(f => f.name.trim() === feature.name.trim());
        if (!originalFeature) continue;

        for (const scenario of originalFeature.elements) {
            const scenarioId = createId();
            const scenarioDescription = scenario.description?.trim() || '';

            scenariosToCreate.push({
                id: scenarioId,
                featureId: featureId,
                keyword: scenario.keyword,
                name: scenario.name,
                description: scenarioDescription
            });

            let scenarioStatus: Status = 'untested';
            let scenarioDuration: number = 0;

            for (const tag of scenario.tags || []) {
                if (!tag.name) {
                    console.error(`❌ Ошибка: найден тег без имени в сценарии "${scenario.name}"`);
                    continue;
                }

                let tagId = tagMap.get(tag.name.trim());
                if (!tagId) {
                    const newTag = await dbClient.tag.create({ data: { name: tag.name.trim() } });
                    if (!newTag || !newTag.id) {
                        console.error(`❌ Ошибка: Не удалось создать тег "${tag.name}"`);
                        continue;
                    }
                    tagId = newTag.id;
                    tagMap.set(tag.name.trim(), tagId);
                }

                scenarioTagsToCreate.push({ scenarioId, tagId });
            }

            for (const [index, step] of scenario.steps.entries()) {
                const stepName = step.name.trim().toLowerCase();
                const stepData = steps.find(s => s.name.trim().toLowerCase() === stepName);

                if (!stepData) {
                    console.error(`⚠️ Ошибка: Шаг "${step.name}" не найден в collectSteps.`);
                    continue;
                }

                scenarioStepsToCreate.push({ scenarioId, stepId: stepData.id });

                const scenarioResult = stepResults.find(sr => sr.scenarioName.trim().toLowerCase() === scenario.name.trim().toLowerCase());
                const stepResult = scenarioResult?.steps[index];

                runStepsToCreate.push({
                    id: createId(),
                    stepId: stepData.id,
                    scenarioId,
                    runId,
                    status: stepResult?.status as Status ?? "unknown",
                    duration: stepResult?.duration ?? 0,
                    createdAt: new Date(),
                    errorMessage: stepResult?.errorMessage ?? null,
                    stackTrace: null
                });

                stepsCount++;
                scenarioDuration += stepResult?.duration ?? 0;

                if (!stepsToCreate.some(s => s.id === stepData.id)) {
                    stepsToCreate.push({
                        id: stepData.id,
                        keyword: stepData.keyword,
                        name: stepData.name,
                        media: stepData.media
                    });
                }

                if (stepResult?.status === 'failed') {
                    scenarioStatus = 'failed';
                }

                if (stepResult?.status === 'skipped' && scenarioStatus !== 'failed') {
                    scenarioStatus = 'skipped';
                }
            }


            if (scenarioStatus !== 'failed' && scenarioStatus !== 'skipped') {
                scenarioStatus = 'passed';
            }

            runScenariosToCreate.push({
                id: createId(),
                scenarioId,
                runId: runId,
                status: scenarioStatus,
                duration: scenarioDuration,
                createdAt: new Date()
            });

            scenariosCount++;

            // Check if scenario was failed, if so, mark the feature as failed
            if (scenarioStatus === 'failed') {
                featureStatus = 'failed';
            }
        }

        // If no scenario was failed, we can keep the feature status as passed
        if (featureStatus !== 'failed') {
            featureStatus = 'passed';
        }

        const featureScenariosDuration = runScenariosToCreate
            .filter(rs => rs.scenarioId && scenariosToCreate.find(s => s.id === rs.scenarioId)?.featureId === featureId)
            .reduce((sum, rs) => sum + (rs.duration ?? 0), 0);

        // Update runFeature status after processing all scenarios
        runFeaturesToCreate.push({
            id: createId(),
            featureId,
            runId: runId,
            status: featureStatus,
            duration: featureScenariosDuration,
            createdAt: new Date()
        });
    }

    await synchronizeScenarios(
        scenariosToCreate.map(scenario => ({
            ...scenario,
            steps: [],
            tags: [],
            type: 'Scenario' as const
        })),
        databaseUrl
    );

    // Handle failed status if necessary
    if (failCount > 0) {
        status = 'failed';
    }

    const tagsToCreate = Array.from(tagsSet).map(tagName => ({
        name: tagName,
    }));

    await dbClient.run.create({
        data: {
            id: runId, status, browser, platform, environment,
            featuresCount, scenariosCount, stepsCount, passCount, failCount, skipCount,
            auto: true, duration,
        }
    });

    // console.log("tagsToCreate:", JSON.stringify(tagsToCreate, null, 2));
    // console.log("featuresToCreate:", JSON.stringify(featuresToCreate, null, 2));
    // console.log("scenariosToCreate:", JSON.stringify(scenariosToCreate, null, 2));
    // console.log("stepsToCreate:", JSON.stringify(stepsToCreate, null, 2));
    // console.log("scenarioStepsToCreate:", JSON.stringify(scenarioStepsToCreate, null, 2));
    // console.log("featureTagsToCreate:", JSON.stringify(featureTagsToCreate, null, 2));
    // console.log("scenarioTagsToCreate:", JSON.stringify(scenarioTagsToCreate, null, 2));
    // console.log("runFeaturesToCreate:", JSON.stringify(runFeaturesToCreate, null, 2));
    // console.log("runScenariosToCreate:", JSON.stringify(runScenariosToCreate, null, 2));
    // console.log("runStepsToCreate:", JSON.stringify(runStepsToCreate, null, 2));

    const uniqueSteps = Array.from(new Map(
        stepsToCreate.map(step => [`${step.name.trim().toLowerCase()}-${step.keyword.trim().toLowerCase()}`, step])
    ).values());

    try {
        await dbClient.$transaction(async (tx) => {
            console.log("📌 Сохраняем теги...");
            await tx.tag.createMany({ data: tagsToCreate, skipDuplicates: true });

            console.log("📌 Сохраняем фичи...");
            await tx.feature.createMany({ data: featuresToCreate, skipDuplicates: true });

            console.log("📌 Сохраняем сценарии...");
            await tx.scenario.createMany({ data: scenariosToCreate, skipDuplicates: true });

            console.log("📌 Сохраняем шаги...");
            await tx.step.createMany({ data: uniqueSteps, skipDuplicates: true });

            console.log("📌 Сохраняем связи сценарий-шаг...");
            await tx.scenarioStep.createMany({ data: scenarioStepsToCreate, skipDuplicates: true });

            console.log("📌 Сохраняем связи фича-тег...");
            await tx.featureTag.createMany({ data: featureTagsToCreate, skipDuplicates: true });

            console.log("📌 Сохраняем связи сценарий-тег...");
            await tx.scenarioTag.createMany({ data: scenarioTagsToCreate, skipDuplicates: true });

            console.log("📌 Сохраняем результаты фич...");
            await tx.runFeature.createMany({
                data: runFeaturesToCreate,
                skipDuplicates: true
            });

            console.log("📌 Сохраняем результаты сценариев...");
            await tx.runScenario.createMany({
                data: runScenariosToCreate,
                skipDuplicates: true
            });

            console.log("📌 Сохраняем результаты шагов...");
            await tx.runStep.createMany({
                data: runStepsToCreate,
                skipDuplicates: true
            });

            console.log("📌 Обновляем данные о запуске...");
            await tx.run.update({
                where: { id: runId },
                data: {
                    featuresCount,
                    scenariosCount,
                    stepsCount,
                    passCount,
                    failCount,
                    skipCount,
                    duration
                },
            });
        });

        console.log("✅ Данные успешно сохранены в базе.");
    } catch (error) {
        console.error("❌ Ошибка при сохранении данных в транзакции:", error);
        // Можно сюда добавить дополнительные действия, например:
        // - отправить ошибку в систему мониторинга
        // - вызвать process.exit(1), если нужно остановить процесс
    }

    await dbClient.$disconnect();

    console.log("Data successfully saved!");
}

export { saveResults };