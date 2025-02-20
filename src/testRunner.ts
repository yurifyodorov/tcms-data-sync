const runTests = (
    runId: string,
    specPaths: string[],
    browser: string,
    platform: string,
): void => {
    console.log("✅ Функция runTests выполнена успешно!");
    console.log(`
        runId: ${runId}, 
        specPaths: ${specPaths.join(', ')}, 
        browser: ${browser}, 
        platform: ${platform}
    `);
};

export { runTests };