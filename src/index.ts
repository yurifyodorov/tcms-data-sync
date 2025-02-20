import { runTests } from "./testRunner";
import { saveResults } from "./resultsParser";
import { sendSlackReport } from "./slackNotifier";

const runner = {
    runTests,
    saveResults,
    sendSlackReport
};

export default runner;
