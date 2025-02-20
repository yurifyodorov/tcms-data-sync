#!/usr/bin/env node

import { runTests } from "../testRunner";
import { saveBrowserDetails } from "../browserInfo";
import { saveSystemInfo } from "../systemInfo";
import { saveResults } from "../resultsParser";
import { sendSlackReport } from "../slackNotifier";
import * as process from "process";

const args = process.argv.slice(2);

if (args.length < 2) {
    console.error("Ошибка: Необходимо указать пути к спецификациям и браузер.");
    process.exit(1);
}

const specPaths = args[0].split(',');
const browser = args[1];

console.log("🚀 Запуск tcms-test-runner...");
console.log(`Используем браузер: ${browser}`);
console.log(`Пути спецификаций: ${specPaths}`);

runTests();
saveBrowserDetails();
saveSystemInfo();
saveResults();
sendSlackReport();
