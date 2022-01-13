import { DbCreateAccount } from "@/application/usecases/account/create-account/db-create-account";
import { ICreateAccount } from "@/domain/usecases/account/create-account";
import { BcryptAdapter } from "@/infra/criptography/bcrypt-adapter/bcrypt-adapter";

export const makeDbCreateAccount = (): ICreateAccount => {
  const bcryptAdapter = new BcryptAdapter();
  return new DbCreateAccount(bcryptAdapter);
};
