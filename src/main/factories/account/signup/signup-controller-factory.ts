import { SignupController } from "@/presentation/controllers/account/signup/signup-controller";
import { IController } from "@/presentation/protocols/controller";

import { makeInMemoryCreateAccount } from "../../usecases/account/in-memory-create-account-factory";

export const makeSignUpController = (): IController => {
  const controller = new SignupController(makeInMemoryCreateAccount());
  return controller;
};
