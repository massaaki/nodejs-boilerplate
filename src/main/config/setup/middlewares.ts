import { Express } from "express";

import { bodyParser } from "../../middlewares/express/body-parser";
import { contentType } from "../../middlewares/express/content-type";
import { cors } from "../../middlewares/express/cors";

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
};
