import { IHasher } from "@/application/protocols/cryptography/hasher";
import { IAccount } from "@/domain/entities/account";
import {
  CreateAccountProps,
  ICreateAccount,
} from "@/domain/usecases/account/create-account";

export class CreateAccountInMemory implements ICreateAccount {
  constructor(private readonly hasher: IHasher) {}

  async create(account: CreateAccountProps): Promise<IAccount> {
    const { password } = account;
    await this.hasher.hash(password);
    return new Promise((resolve) => resolve(null));
  }
}
