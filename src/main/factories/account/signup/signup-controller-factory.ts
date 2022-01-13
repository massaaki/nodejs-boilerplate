import { SignupController } from "@/presentation/controllers/account/signup/signup-controller";
import { IController } from "@/presentation/protocols/controller";

import { makeDbCreateAccount } from "../../usecases/account/db-create-account-factory";

export const makeSignUpController = (): IController => {
  const controller = new SignupController(makeDbCreateAccount());
  return controller;
};
