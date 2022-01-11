import { Express, Router } from "express";
import { readdirSync } from "fs";

export default (app: Express): void => {
  const router = Router();
  const prefix = "/api";
  app.use(prefix, router);

  readdirSync(`${__dirname}/../routes`).map(async (file) => {
    if (!file.includes(".test.")) {
      console.log(`../routes/${file}`);
      (await import(`../routes/${file}`)).default(router);
    }
  });
};
