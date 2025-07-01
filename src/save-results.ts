import { createId } from './utils/id';
import { getDbClient } from "./utils/db";

import { TestData } from "./types";

import { Prisma, Status, RunStep, RunScenario, RunFeature } from "../prisma-client";

import { collectScenarios } from './collect-scenarios';
import { collectStepsResults } from './collect-steps-results';

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

    const scenarios = await collectScenarios(testData, databaseUrl);
    if (!scenarios) {
        console.error("❌ Ошибка: collectScenarios вернул undefined");
        return;
    }

    const stepResults = await collectStepsResults(testData);

    let featuresCount = 0;
    let scenariosCount = 0;
    let stepsCount = 0;

    let passCount = 0;
    let failCount = 0;
    let skipCount = 0;
    let status: Status = 'passed';
    let duration = 0;

    const runStepsToCreate: RunStep[] = [];
    const runScenariosToCreate: RunScenario[] = [];
    const runFeaturesToCreate: RunFeature[] = [];

    const featureMap = new Map<string, {
        id: string;
        name: string;
        duration: number;
        status: Status;
    }>();

    for (const scenarioResult of stepResults) {
        const scenarioName = scenarioResult.scenarioName.trim();
        const scenarioId = scenarios.find(s => s.name.trim() === scenarioName)?.id;

        if (!scenarioId) {
            console.warn(`⚠️ Сценарий "${scenarioName}" не найден в collectScenarios`);
            continue;
        }

        let scenarioStatus: Status = 'passed';
        let scenarioDuration = 0;
        let scenarioFailed = false;
        let scenarioSkipped = true;

        for (const stepResult of scenarioResult.steps) {
            stepsCount++;
            scenarioDuration += stepResult.duration;
            duration += stepResult.duration;

            const stepStatus = stepResult.status as Status ?? 'unknown';

            if (stepStatus === 'failed') {
                scenarioStatus = 'failed';
                scenarioFailed = true;
                scenarioSkipped = false;
            } else if (stepStatus === 'skipped') {
                if (scenarioStatus !== 'failed') scenarioStatus = 'skipped';
            } else if (stepStatus === 'passed') {
                scenarioSkipped = false;
            }

            runStepsToCreate.push({
                id: createId(),
                stepId: 'unknown', // Или заменить логикой поиска по collectSteps, если потребуется
                scenarioId,
                runId,
                status: stepStatus,
                duration: stepResult.duration,
                createdAt: new Date(),
                errorMessage: stepResult.errorMessage ?? null,
                stackTrace: null
            });
        }

        if (scenarioSkipped) {
            skipCount++;
        } else if (!scenarioFailed) {
            passCount++;
        } else {
            failCount++;
        }

        runScenariosToCreate.push({
            id: createId(),
            scenarioId,
            runId,
            status: scenarioStatus,
            duration: scenarioDuration,
            createdAt: new Date()
        });

        scenariosCount++;
    }

    featuresCount = featureMap.size;

    for (const feature of featureMap.values()) {
        runFeaturesToCreate.push({
            id: createId(),
            featureId: feature.id,
            runId,
            status: feature.status,
            duration: feature.duration,
            createdAt: new Date()
        });
    }

    if (failCount > 0) {
        status = 'failed';
    }

    await dbClient.run.create({
        data: {
            id: runId,
            status,
            browser,
            platform,
            environment,
            featuresCount,
            scenariosCount,
            stepsCount,
            passCount,
            failCount,
            skipCount,
            auto: true,
            duration,
        }
    });

    try {
        await dbClient.$transaction(async (tx: Prisma.TransactionClient) => {
            console.log("📌 Сохраняем результаты фич...");
            console.log("runFeaturesToCreate:", runFeaturesToCreate);
            await tx.runFeature.createMany({ data: runFeaturesToCreate, skipDuplicates: true });

            console.log("📌 Сохраняем результаты сценариев...");
            console.log("runScenariosToCreate:", runScenariosToCreate);
            await tx.runScenario.createMany({ data: runScenariosToCreate, skipDuplicates: true });

            console.log("📌 Сохраняем результаты шагов...");
            console.log("runStepsToCreate:", runStepsToCreate);
            await tx.runStep.createMany({ data: runStepsToCreate, skipDuplicates: true });

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

        console.log("✅ Результаты успешно сохранены в базе.");
    } catch (error) {
        console.error("❌ Ошибка при сохранении данных в транзакции:", error);
    }

    await dbClient.$disconnect();

    console.log("Data successfully saved!");
};

export { saveResults };
