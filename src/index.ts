import { saveResults } from "./resultsParser";
import { sendSlackReport } from "./slackNotifier";

const runner = {
    saveResults,
    sendSlackReport
};

export default runner;
