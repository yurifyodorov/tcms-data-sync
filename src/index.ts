import { saveResults } from "./resultsParser";
import { sendSlackReport } from "./slackNotifier";

const tcms = {
    saveResults,
    sendSlackReport
};

export default tcms;
