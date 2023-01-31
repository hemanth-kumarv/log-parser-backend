import { logFileRegex } from "../../../helpers/logFileRegex";
import { IParsedLogs } from "../../../types/IParsedLogs";

/**
 * Service layer to parse logs to required format
 * @param data contents of the log file as string
 * @returns array of logs in parsed format
 */
export const parseLogsService = (data: string) =>
  new Promise<IParsedLogs[] | Error>((resolve, reject) => {
    try {
      const matches = [...data.matchAll(logFileRegex)].map((match) => {
        let [, time, loglevel, details] = match;
        let timestamp = new Date(time).getTime();
        let parsedDetails = JSON.parse(details);
        return {
          timestamp,
          loglevel,
          transactionId: parsedDetails?.transactionId,
          err: parsedDetails?.err,
          details: parsedDetails?.details,
        };
      });
      return resolve(matches);
    } catch (error) {
      return reject(error as Error);
    }
  });
