import { IHasher } from "@/application/protocols/cryptography/hasher";
import { DbCreateAccount } from "@/application/usecases/account/create-account/db-create-account";

describe("DbCreateAccount Usecase", () => {
  it("should call Hasher with correct password", async () => {
    class HasherStub implements IHasher {
      hash(): Promise<string> {
        return new Promise((resolve) => resolve("hashed_value"));
      }
    }
    const accountData = {
      name: "jhon doe",
      email: "john@email.com",
      password: "secret",
    };

    const hasherStub = new HasherStub();
    const sut = new DbCreateAccount(hasherStub);

    const hashSpy = jest.spyOn(hasherStub, "hash");

    await sut.create(accountData);

    expect(hashSpy).toHaveBeenCalledWith("secret");
  });
});
