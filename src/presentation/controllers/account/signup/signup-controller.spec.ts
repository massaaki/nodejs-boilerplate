import { IAccount } from "@/domain/entities/account";
import { ICreateAccount } from "@/domain/usecases/account/create-account";
import { IHttpRequest } from "@/presentation/protocols/http";

import { SignupController } from "./signup-controller";

describe("Signup Controller", () => {
  it("should call CreateAccount.create with correct values", async () => {
    class CreateAccountStub implements ICreateAccount {
      async create(): Promise<IAccount> {
        const accountData: IAccount = {
          id: "any_id",
          name: "jhon doe",
          email: "john_doe@email.com",
          password: "secret",
        };
        return new Promise((resolve) => resolve(accountData));
      }
    }

    const createAccountStub = new CreateAccountStub();
    const sut = new SignupController(createAccountStub);

    const request: IHttpRequest = {
      body: {
        name: "jhon doe",
        email: "john_doe@email.com",
        password: "secret",
      },
    };

    const createSpy = jest.spyOn(createAccountStub, "create");
    await sut.handle(request);

    expect(createSpy).toHaveBeenCalledWith({
      name: "jhon doe",
      email: "john_doe@email.com",
      password: "secret",
    });
  });
});
