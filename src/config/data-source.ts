import { DataSource } from 'typeorm';
import 'dotenv/config';
import path from 'path';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [path.join(__dirname, '../proyectos/**/*.entity.{ts,js}')],
  migrations: [path.join(__dirname, '../migrations/**/*.ts')],
  synchronize: false,
  logging: true,
});
