import { simplifyTestData } from './utils/simplifyTestData';

const saveResults = (
    runId: string,
    browser: string,
    platform: string,
    testData: any
): void => {

    console.log(`runId: ${runId}`);
    console.log(`browser: ${browser}`);
    console.log(`platform: ${platform}`);

    const cleanedTestData = simplifyTestData(testData);

    console.log("testData:", JSON.stringify(cleanedTestData, null, 2));

    console.log("✅ Функция saveResults выполнена успешно!");
};

export { saveResults };
