import mysql  from "mysql2/promise";
import { config } from 'dotenv';

config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const dbPool = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database,
});

export default dbPool;