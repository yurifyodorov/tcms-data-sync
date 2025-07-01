import crypto from "crypto";
import { TestData, StepResult } from "./types";

interface ScenarioResult {
    scenarioName: string;
    steps: {
        status: string;
        duration: number;
        contentHash: string;
        errorMessage?: string;
    }[];
}

function computeContentHash(keyword: string, name: string): string {
    return crypto.createHash("md5").update(`${keyword.trim()} ${name.trim()}`).digest("hex").slice(0, 8);
}

const collectStepsResults = async (testData: TestData): Promise<ScenarioResult[]> => {
    const results: ScenarioResult[] = [];

    testData.forEach(feature => {
        feature.elements.forEach(scenario => {
            const steps = (scenario.steps as StepResult[]).map(step => {
                const { status, duration, error_message } = step.result;
                const durationInMs = Math.floor(duration / 1_000_000);

                return {
                    status,
                    duration: durationInMs,
                    contentHash: computeContentHash(step.keyword, step.name),
                    ...(error_message ? { errorMessage: error_message } : {})
                };
            });

            results.push({
                scenarioName: scenario.name,
                steps,
            });
        });
    });

    return results;
};

export { collectStepsResults };
