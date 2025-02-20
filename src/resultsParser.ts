const saveResults = (runId: string, browser: string, platform: string, testData: any): void => {

    console.log("🚀 Получены данные:");
    console.log(`runId: ${runId}`);
    console.log(`browser: ${browser}`);
    console.log(`platform: ${platform}`);

    const cleanedTestData = JSON.parse(JSON.stringify(testData, (key, value) => {
        if (key === "embeddings") {
            return;
        }
        return value;
    }));

    console.log("testData':", JSON.stringify(cleanedTestData, null, 2));

    console.log("✅ Функция saveResults выполнена успешно!");
};

export { saveResults };
