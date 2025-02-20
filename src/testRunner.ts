import { execSync } from 'child_process';
import { createId } from './lib/id';

const runTests = (specPaths: string[], browser: string): void => {
    const runId = createId();
    console.log(`🟢 Running tests with runId: ${runId}`);

    const specString = specPaths.join(',');

    try {
        execSync(
            `cypress run --browser ${browser} --spec '${specString}' --env browserName=${browser},runId=${runId} --no-runner-ui`,
            { stdio: 'inherit' }
        );
        console.log(`✅ Tests executed successfully`);
    } catch (error: any) {
        console.error(`❌ Error during test execution:`, error.message);
    }
};

export { runTests };
