const runTests = (
    runId: string,
    specString: string[],
    browser: string,
    platform: string,
): void => {
    console.log("✅ Функция runTests выполнена успешно!");
    console.log(`
        runId: ${runId}, 
        specString: ${specString.join(', ')}, 
        browser: ${browser}, 
        platform: ${platform}
    `);
};

export { runTests };