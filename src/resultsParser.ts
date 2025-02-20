const saveResults = (
    runId: string,
    browser: string,
    platform: string,
    testData: any,
    databaseUrl: string
): void => {

    console.log(`runId: ${runId}`);
    console.log(`browser: ${browser}`);
    console.log(`platform: ${platform}`);
    console.log("testData:", JSON.stringify(testData, null, 2));
    console.log(`databaseUrl: ${databaseUrl}`);

    console.log("✅ Функция saveResults выполнена успешно!");
};

export { saveResults };



// import { dbClient } from './utils/db';
// import { createId } from './utils/id';
// import { simplifyTestData } from './utils/simplifyTestData';
//
// const saveResults = async (
//     runId: string,
//     browser: string,
//     platform: string,
//     testData: any,
//     databaseUrl: string
// ): Promise<void> => {
//
//     console.log(`runId: ${runId}`);
//     console.log(`browser: ${browser}`);
//     console.log(`platform: ${platform}`);
//
//     dbClient.$connect({ datasources: { db: { url: databaseUrl } } });
//
//     const cleanedTestData = simplifyTestData(testData);
//
//     console.log("testData to save:", JSON.stringify(cleanedTestData, null, 2));
//
//     let featuresCount = 0;
//     let scenariosCount = 0;
//     let passCount = 0;
//     let failCount = 0;
//     let skipCount = 0;
//     let stepsCount = 0;
//
//     let featuresToCreate = [];
//     let scenariosToCreate = [];
//     let stepsToCreate = [];
//
//     let status = 'completed';
//     let runDuration = 0;
//
//     for (const feature of cleanedTestData) {
//         let featureDuration = 0;
//         featuresCount++;
//
//         const featureId = createId();
//         const featureData = {
//             id: featureId,
//             name: feature.name,
//             description: feature.description || '',
//             uri: feature.uri,
//             runId: runId,
//             duration: featureDuration,
//         };
//
//         featuresToCreate.push(featureData);
//
//         for (const scenario of feature.elements) {
//             let scenarioDuration = 0;
//             let scenarioStatus = 'passed';
//             const scenarioId = createId();
//
//             const tags = (scenario.tags || []).map((tag: { name: string }) => tag.name);
//
//             const scenarioData = {
//                 id: scenarioId,
//                 runId: runId,
//                 featureId: featureId,
//                 name: scenario.name,
//                 line: scenario.line,
//                 status: scenarioStatus,
//                 message: '', // TODO: Что сохранять в сообщение?
//                 tags: tags,
//                 duration: scenarioDuration,
//             };
//
//             scenariosToCreate.push(scenarioData);
//
//             let scenarioFailed = false;
//             let scenarioSkipped = true;
//
//             for (const step of scenario.steps.filter((step: any) => !['Before', 'BeforeAll', 'After', 'AfterAll'].includes(step.keyword))) {
//                 const stepDuration = step.result.duration;
//                 const stepDurationInMs = Math.floor(stepDuration / 1000000);
//                 scenarioDuration += stepDurationInMs;
//
//                 const stepData = {
//                     id: createId(),
//                     runId: runId,
//                     scenarioId: scenarioId,
//                     name: `${step.keyword.trim()} ${step.name}`,
//                     status: step.result.status,
//                     duration: stepDurationInMs,
//                     message: step.result.error_message || '',
//                 };
//
//                 stepsToCreate.push(stepData);
//                 stepsCount++;
//
//                 if (step.result.status === 'failed') {
//                     scenarioFailed = true;
//                 }
//
//                 if (step.result.status !== 'skipped') {
//                     scenarioSkipped = false;
//                 }
//             }
//
//             if (scenarioSkipped) {
//                 scenarioStatus = 'skipped';
//                 skipCount++;
//             } else if (scenarioFailed) {
//                 scenarioStatus = 'failed';
//                 failCount++;
//             } else {
//                 scenarioStatus = 'passed';
//                 passCount++;
//             }
//
//             scenariosCount++;
//             scenarioData.status = scenarioStatus;
//             scenarioData.duration = scenarioDuration;
//         }
//
//         featureDuration += scenariosToCreate.reduce((acc, scenario) => acc + scenario.duration, 0);
//         featureData.duration = featureDuration;
//         runDuration += featureDuration;
//     }
//
//     if (failCount > 0) {
//         status = 'failed';
//     }
//
//     await dbClient.run.create({
//         data: {
//             id: runId,
//             environment: process.env.ENVIRONMENT || '',
//             status: status,
//             featuresCount,
//             scenariosCount,
//             passCount,
//             failCount,
//             skipCount,
//             stepsCount,
//             auto: true,
//             browser: browser || null,
//             platform: platform || null,
//             duration: runDuration,
//         }
//     });
//
//     await dbClient.$transaction([
//         dbClient.feature.createMany({ data: featuresToCreate }),
//         dbClient.scenario.createMany({ data: scenariosToCreate }),
//         dbClient.step.createMany({ data: stepsToCreate }),
//         dbClient.run.update({
//             where: { id: runId },
//             data: {
//                 featuresCount,
//                 scenariosCount,
//                 passCount,
//                 failCount,
//                 skipCount,
//                 stepsCount,
//                 duration: runDuration,
//             }
//         }),
//     ]);
//
//     console.log("✅ Функция saveResults выполнена успешно!");
// };
//
// export { saveResults };
