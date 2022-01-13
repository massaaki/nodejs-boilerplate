import { Connection, createConnection, getConnectionOptions } from "typeorm";

export const PostgreTypeOrmHelper = {
  async createConnection(): Promise<Connection> {
    const defaultOptions = await getConnectionOptions();
    return createConnection(
      Object.assign(defaultOptions, {
        host: "localhost",
        database: "base_project",
      })
    );
  },
};
