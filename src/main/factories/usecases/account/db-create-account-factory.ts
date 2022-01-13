import { DbCreateAccount } from "@/application/usecases/account/create-account/db-create-account";
import { ICreateAccount } from "@/domain/usecases/account/create-account";
import { BcryptAdapter } from "@/infra/criptography/bcrypt-adapter/bcrypt-adapter";
import { AccountPostgresRepository } from "@/infra/postgres/account/account-postgres-repository";

export const makeDbCreateAccount = (): ICreateAccount => {
  const bcryptAdapter = new BcryptAdapter();
  const accountPostgresRepository = new AccountPostgresRepository();

  return new DbCreateAccount(bcryptAdapter, accountPostgresRepository);
};
