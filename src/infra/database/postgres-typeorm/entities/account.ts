import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as createUuidV4 } from "uuid";

import { IAccount } from "@/domain/entities/account";

@Entity("accounts")
class Account implements IAccount {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = createUuidV4();
    }
  }
}

export { Account };
