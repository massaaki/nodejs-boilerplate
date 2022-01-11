import { IAccount } from "@/domain/entities/account";
import { CreateAccountProps } from "@/domain/usecases/account/create-account";

export interface ICreateAccountRepository {
  create: (account: CreateAccountProps) => Promise<IAccount>;
}
