import { getRepository, Repository } from "typeorm";

import { ICreateAccountRepository } from "@/application/protocols/account/create-account-repository";
import { IAccount } from "@/domain/entities/account";
import { CreateAccountProps } from "@/domain/usecases/account/create-account";

import { Account } from "../../database/postgres-typeorm/entities/account";

export class AccountPostgresRepository implements ICreateAccountRepository {
  private repository: Repository<Account>;

  constructor() {
    // this.repository = getRepository(Account);
    console.log("constructor");
  }

  async create(account: CreateAccountProps): Promise<IAccount> {
    const { email, password, name } = account;
    this.repository = getRepository(Account);

    const data = this.repository.create({
      name,
      email,
      password,
    });

    const response = await this.repository.save(data);
    console.log("==> response..:", response);

    // return new Promise((resolve) => resolve(null));
    return null;
  }
}
