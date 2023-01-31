"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3002;
// CORS, JSON and URL Encoded Middlewares
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const index_1 = __importDefault(require("./routes/index"));
const responses_1 = require("./helpers/responses");
app.use("/api", index_1.default);
// Custom 404 error
app.use((req, res, next) => (0, responses_1.notFound)(res));
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
