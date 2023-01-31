"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLogs = void 0;
const outputMessages_1 = require("../../../helpers/outputMessages");
const readFileContent_1 = require("../../../helpers/readFileContent");
const responses_1 = require("../../../helpers/responses");
const parseLogsService_1 = require("../../../service/v1/logs/parseLogsService");
const parseLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logFile = yield (0, readFileContent_1.readFileContent)(req.file); // Convert req.file to string
        const data = yield (0, parseLogsService_1.parseLogsService)(logFile); // Get parsed logs as per required format
        return (0, responses_1.success)(res, outputMessages_1.parseLogsSuccess, { data });
    }
    catch (error) {
        console.log("error :>> ", error);
        let message = (error === null || error === void 0 ? void 0 : error.message) || outputMessages_1.parseLogsFailure;
        return (0, responses_1.internalError)(res, message);
    }
});
exports.parseLogs = parseLogs;
