"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.internalError = exports.success = void 0;
const success = (res, message = "Success", rest) => res.status(200).json(Object.assign({ statusCode: 200, message }, rest));
exports.success = success;
const internalError = (res, message = "Internal Server Error", rest) => res.status(500).json(Object.assign({ statusCode: 500, message }, rest));
exports.internalError = internalError;
const notFound = (res, message = "Not Found", rest) => res.status(404).json(Object.assign({ statusCode: 404, message }, rest));
exports.notFound = notFound;
