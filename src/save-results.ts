import { createId } from "./utils/id";
import { TestData } from "./types";

import {
    PrismaClient,
    Prisma,
    Status,
    RunStep,
    RunScenario,
    RunFeature,
} from "../prisma-client";

import { collectScenarios } from "./collect-scenarios";
import { collectStepsResults } from "./collect-steps-results";

const saveResults = async (
    dbClient: PrismaClient,
    runId: string,
    browser: string,
    platform: string,
    environment: string,
    testData: TestData
): Promise<void> => {
    const scenarios = await collectScenarios(testData, dbClient);
    if (!scenarios) {
        console.error("❌ Ошибка: collectScenarios вернул undefined");
        return;
    }

    const stepResults = await collectStepsResults(testData);

    const allSteps = await dbClient.step.findMany({
        select: { id: true, contentHash: true },
        where: { active: true },
    });

    const stepHashMap = new Map(allSteps.map((step) => [step.contentHash!, step.id]));

    let featuresCount = 0;
    let scenariosCount = 0;
    let stepsCount = 0;

    let stepPassCount = 0;
    let stepFailCount = 0;
    let stepSkipCount = 0;

    let scenarioPassCount = 0;
    let scenarioFailCount = 0;
    let scenarioSkipCount = 0;

    let featurePassCount = 0;
    let featureFailCount = 0;
    let featureSkipCount = 0;

    let status: Status = "passed";
    let duration = 0;

    const runStepsToCreate: RunStep[] = [];
    const runScenariosToCreate: RunScenario[] = [];
    const runFeaturesToCreate: RunFeature[] = [];

    const featureMap = new Map<
        string,
        {
            id: string;
            name: string;
            duration: number;
            status: Status;
        }
    >();

    for (const scenarioResult of stepResults) {
        const scenarioName = scenarioResult.scenarioName.trim();
        const scenarioId = scenarios.find(
            (s) => s.name.trim() === scenarioName
        )?.id;

        if (!scenarioId) {
            console.warn(`⚠️ Сценарий "${scenarioName}" не найден в collectScenarios`);
            continue;
        }

        let scenarioStatus: Status = "passed";
        let scenarioDuration = 0;
        let scenarioFailed = false;
        let scenarioSkipped = true;

        for (const stepResult of scenarioResult.steps) {
            stepsCount++;
            scenarioDuration += stepResult.duration;
            duration += stepResult.duration;

            const stepStatus = (stepResult.status as Status) ?? "unknown";

            if (stepStatus === "failed") {
                scenarioStatus = "failed";
                scenarioFailed = true;
                scenarioSkipped = false;
                stepFailCount++;
            } else if (stepStatus === "skipped") {
                if (scenarioStatus !== "failed") scenarioStatus = "skipped";
                stepSkipCount++;
            } else if (stepStatus === "passed") {
                scenarioSkipped = false;
                stepPassCount++;
            }

            const stepId = stepHashMap.get(stepResult.contentHash);
            if (!stepId) {
                console.warn(
                    `⚠️ Шаг с contentHash ${stepResult.contentHash} не найден в базе`
                );
                continue;
            }

            runStepsToCreate.push({
                id: createId(),
                stepId,
                scenarioId,
                runId,
                status: stepStatus,
                duration: stepResult.duration,
                createdAt: new Date(),
                errorMessage: stepResult.errorMessage ?? null,
                stackTrace: null,
            });
        }

        if (scenarioSkipped) {
            scenarioSkipCount++;
        } else if (!scenarioFailed) {
            scenarioPassCount++;
        } else {
            scenarioFailCount++;
        }

        runScenariosToCreate.push({
            id: createId(),
            scenarioId,
            runId,
            status: scenarioStatus,
            duration: scenarioDuration,
            createdAt: new Date(),
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
            createdAt: new Date(),
        });

        if (feature.status === "failed") featureFailCount++;
        else if (feature.status === "skipped") featureSkipCount++;
        else if (feature.status === "passed") featurePassCount++;
    }

    if (scenarioFailCount > 0 || stepFailCount > 0 || featureFailCount > 0) {
        status = "failed";
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
            featurePassCount,
            featureFailCount,
            featureSkipCount,
            scenarioPassCount,
            scenarioFailCount,
            scenarioSkipCount,
            stepPassCount,
            stepFailCount,
            stepSkipCount,
            auto: true,
            duration,
        },
    });

    try {
        await dbClient.$transaction(async (tx: Prisma.TransactionClient) => {
            await tx.runFeature.createMany({
                data: runFeaturesToCreate,
                skipDuplicates: true,
            });
            await tx.runScenario.createMany({
                data: runScenariosToCreate,
                skipDuplicates: true,
            });
            await tx.runStep.createMany({
                data: runStepsToCreate,
                skipDuplicates: true,
            });

            await tx.run.update({
                where: { id: runId },
                data: {
                    featuresCount,
                    scenariosCount,
                    stepsCount,
                    featurePassCount,
                    featureFailCount,
                    featureSkipCount,
                    scenarioPassCount,
                    scenarioFailCount,
                    scenarioSkipCount,
                    stepPassCount,
                    stepFailCount,
                    stepSkipCount,
                    duration,
                },
            });
        });

        console.log("✅ Результаты успешно сохранены в базе.");
    } catch (error) {
        console.error("❌ Ошибка при сохранении данных в транзакции:", error);
    }

    console.log("Data successfully saved!");
};

export { saveResults };
