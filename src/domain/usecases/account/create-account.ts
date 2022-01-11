import { IAccount } from "@/domain/entities/account";

export type CreateAccountProps = {
  name: string;
  email: string;
  password: string;
};

export interface ICreateAccount {
  create: (account: CreateAccountProps) => Promise<IAccount>;
}
