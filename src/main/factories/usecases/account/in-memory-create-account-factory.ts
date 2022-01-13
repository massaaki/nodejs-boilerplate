import { CreateAccountInMemory } from "@/application/usecases/account/create-account-in-memory/create-account-in-memory";
import { ICreateAccount } from "@/domain/usecases/account/create-account";
import { BcryptAdapter } from "@/infra/criptography/bcrypt-adapter/bcrypt-adapter";

export const makeInMemoryCreateAccount = (): ICreateAccount => {
  const bcryptAdapter = new BcryptAdapter();
  return new CreateAccountInMemory(bcryptAdapter);
};
