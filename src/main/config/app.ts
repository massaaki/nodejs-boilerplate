import express from "express";

import createConnection from "@/infra/database/postgres-typeorm";

import setupRoutes from "./routes";
import setupMiddlewares from "./setup/middlewares";

createConnection();
const app = express();
setupMiddlewares(app);
setupRoutes(app);

export default app;
