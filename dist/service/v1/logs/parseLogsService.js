"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLogsService = void 0;
const logFileRegex_1 = require("../../../helpers/logFileRegex");
/**
 * Service layer to parse logs to required format
 * @param data contents of the log file as string
 * @returns array of logs in parsed format
 */
const parseLogsService = (data) => new Promise((resolve, reject) => {
    try {
        const matches = [...data.matchAll(logFileRegex_1.logFileRegex)].map((match) => {
            let [, time, loglevel, details] = match;
            let timestamp = new Date(time).getTime();
            let parsedDetails = JSON.parse(details);
            return {
                timestamp,
                loglevel,
                transactionId: parsedDetails === null || parsedDetails === void 0 ? void 0 : parsedDetails.transactionId,
                err: parsedDetails === null || parsedDetails === void 0 ? void 0 : parsedDetails.err,
                details: parsedDetails === null || parsedDetails === void 0 ? void 0 : parsedDetails.details,
            };
        });
        return resolve(matches);
    }
    catch (error) {
        return reject(error);
    }
});
exports.parseLogsService = parseLogsService;
