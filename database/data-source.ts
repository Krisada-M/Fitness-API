import * as dotenv from "dotenv";
import { env } from "process";
import { DataSource } from "typeorm";
import { createDatabase } from "typeorm-extension";

dotenv.config();

export const myData = new DataSource({
  type: "mysql",
  host: env.DB_HOST,
  port: +(env.DB_PORT || 3306),
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: ["dist/database/entitys/*.entity.js"],
  charset: "utf8_general_ci",
  logging: false,
  synchronize: true,
});

export const connect = async () => {
  await createDatabase();
  await myData
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
    });
};
