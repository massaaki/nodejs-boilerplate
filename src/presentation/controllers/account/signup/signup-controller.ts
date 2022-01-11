import { ICreateAccount } from "@/domain/usecases/account/create-account";
import { success } from "@/presentation/helpers/http-helpers";
import { IController } from "@/presentation/protocols/controller";
import { IHttpRequest, IHttpResponse } from "@/presentation/protocols/http";

export class SignupController implements IController {
  constructor(private readonly createAccount: ICreateAccount) {}

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { name, email, password } = httpRequest.body;
      const account = await this.createAccount.create({
        name,
        email,
        password,
      });

      return success(account);
    } catch (error) {
      console.log(error);
    }
    return new Promise((resolve) => resolve(null));
  }
}
