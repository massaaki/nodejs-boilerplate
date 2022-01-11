import { Hasher } from '@/application/protocols/cryptography/Hasher'
import { Account } from '@/domain/entities/account'
import { CreateAccount, CreateAccountModel } from '@/domain/usecases/account/create-account'

export class CreateAccountInMemory implements CreateAccount {
  constructor (
    private readonly hasher: Hasher
  ) { }

  async create (account: CreateAccountModel): Promise<Account> {
    const { password } = account
    this.hasher.hash(password)
    return await new Promise(resolve => resolve({} as any))
  }
}
