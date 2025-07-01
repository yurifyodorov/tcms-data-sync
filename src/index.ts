import { saveResults } from "./save-results";
import { sendSlackReport } from "./slackNotifier";
import { getDbClient } from "./utils/db";

export { saveResults, sendSlackReport, getDbClient };

const tcms = {
    saveResults,
    sendSlackReport,
    getDbClient,
};

export default tcms;
