import { execSync } from 'child_process';
import { createId } from './lib/id';

const runTests = (specPaths: string[], browser: string): void => {
    const runId = createId();
    console.log(`🟢 Running tests with runId: ${runId}`);

    const specString = specPaths.join(',');
    console.log('Test spec paths:', specString);

    try {
        const command = `cypress run --browser ${browser} --spec "${specString}" --env browserName=${browser},runId=${runId} --no-runner-ui --headless`;
        console.log(`Running command: ${command}`);

        execSync(command, { stdio: 'inherit' });

        console.log(`✅ Tests executed successfully`);
    } catch (error: any) {
        console.error(`❌ Error during test execution:`, error.message);
        console.error(error.stack);
    }
};

export { runTests };