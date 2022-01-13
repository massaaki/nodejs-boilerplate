import { ICreateAccountRepository } from "@/application/protocols/account/create-account-repository";
import { IHasher } from "@/application/protocols/cryptography/hasher";
import { DbCreateAccount } from "@/application/usecases/account/create-account/db-create-account";
import { IAccount } from "@/domain/entities/account";

const makeFakeAccount = () => ({
  name: "jhon doe",
  email: "john@email.com",
  password: "secret",
});

const makeHasher = (): IHasher => {
  class HasherStub implements IHasher {
    async hash(): Promise<string> {
      // eslint-disable-next-line @typescript-eslint/return-await
      return new Promise((resolve) => resolve("hashed_value"));
    }
  }
  return new HasherStub();
};

const makeCreateAccountRepository = (): ICreateAccountRepository => {
  class CreateAccountRepositoryStub implements ICreateAccountRepository {
    async create(): Promise<IAccount> {
      return new Promise((resolve) =>
        resolve({
          id: "valid_id",
          name: "valid_name",
          email: "valid_email@email.com",
          password: "hashed_password",
        })
      );
    }
  }

  return new CreateAccountRepositoryStub();
};

type SutTypes = {
  sut: DbCreateAccount;
  hasherStub: IHasher;
  createAccountRepositoryStub: ICreateAccountRepository;
};

const makeSut = (): SutTypes => {
  const hasherStub = makeHasher();
  const createAccountRepositoryStub = makeCreateAccountRepository();

  const sut = new DbCreateAccount(hasherStub, createAccountRepositoryStub);

  return {
    sut,
    hasherStub,
    createAccountRepositoryStub,
  };
};

describe("DbCreateAccount Usecase", () => {
  it("should call Hasher with correct password", async () => {
    const { sut, hasherStub } = makeSut();

    const hashSpy = jest.spyOn(hasherStub, "hash");

    await sut.create(makeFakeAccount());

    expect(hashSpy).toHaveBeenCalledWith("secret");
  });
});
