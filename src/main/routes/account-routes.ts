/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import { adaptRoute } from "../adapters/express/express-router-adapter";
import { makeSignUpController } from "../factories/account/signup/signup-controller-factory";

export default (router: Router): void => {
  router.post("/signup", adaptRoute(makeSignUpController()));
};
