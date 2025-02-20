const saveResults = (
    runId: string,
    browser: string,
    platform: string,
    testData: any
): void => {

    console.log(`runId: ${runId}`);
    console.log(`browser: ${browser}`);
    console.log(`platform: ${platform}`);
    console.log("testData:", JSON.stringify(testData, null, 2));

    console.log("✅ Функция saveResults выполнена успешно!");
};

export { saveResults };
