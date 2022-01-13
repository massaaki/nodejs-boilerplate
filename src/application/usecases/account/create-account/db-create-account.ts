import { ICreateAccountRepository } from "@/application/protocols/account/create-account-repository";
import { IHasher } from "@/application/protocols/cryptography/hasher";
import { IAccount } from "@/domain/entities/account";
import {
  CreateAccountProps,
  ICreateAccount,
} from "@/domain/usecases/account/create-account";

export class DbCreateAccount implements ICreateAccount {
  constructor(
    private readonly hasher: IHasher,
    private readonly createAccountRepository: ICreateAccountRepository
  ) {}

  async create(account: CreateAccountProps): Promise<IAccount> {
    const { password } = account;
    const hash = await this.hasher.hash(password);
    const newAccount = await this.createAccountRepository.create(account);

    // return { ...newAccount, password: hash };
    return newAccount;
  }
}
