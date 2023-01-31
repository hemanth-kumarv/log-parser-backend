import express, { Express } from "express";
const app: Express = express();

declare var process: {
  env: {
    PORT: number;
  };
};

const port: number = process.env.PORT || 3000;

// CORS, JSON and URL Encoded Middlewares
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import routes from "./routes/index";
import { notFound } from "./helpers/responses";
app.use("/api", routes);

// Custom 404 error
app.use((req, res, next) => notFound(res));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
