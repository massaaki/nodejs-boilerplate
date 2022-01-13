import bcrypt from "bcrypt";

import { BcryptAdapter } from "./bcrypt-adapter";

jest.mock("bcrypt", () => ({
  async hash(): Promise<string> {
    return new Promise((resolve) => resolve("any_hash"));
  },
}));

describe("Bcrypt adapter", () => {
  it("should call Hash with correct values", async () => {
    const sut = new BcryptAdapter();
    const hashSpy = jest.spyOn(bcrypt, "hash");
    await sut.hash("any_value");

    expect(hashSpy).toHaveBeenCalledWith("any_value", 12);
  });

  it("should return a hash value on Hash Success", async () => {
    const sut = new BcryptAdapter();
    const hash = await sut.hash("any_value");

    expect(hash).toBe("any_hash");
  });
});
