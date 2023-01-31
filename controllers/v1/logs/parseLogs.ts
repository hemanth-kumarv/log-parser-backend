import { Request, Response } from "express";
import {
  parseLogsFailure,
  parseLogsSuccess,
} from "../../../helpers/outputMessages";
import { readFileContent } from "../../../helpers/readFileContent";
import { internalError, success } from "../../../helpers/responses";
import { parseLogsService } from "../../../service/v1/logs/parseLogsService";

export const parseLogs = async (req: Request, res: Response) => {
  try {
    const logFile = await readFileContent(req.file); // Convert req.file to string
    const data = await parseLogsService(logFile); // Get parsed logs as per required format

    return success(res, parseLogsSuccess, { data });
  } catch (error) {
    console.log("error :>> ", error);
    let message = (error as { message: string })?.message || parseLogsFailure;
    return internalError(res, message);
  }
};
