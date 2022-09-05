import mysql from "mysql2/promise";
import DBConfig from "./db-config";

const pool = mysql.createPool({
  host: DBConfig.database.host,
  port: DBConfig.database.port,
  user: DBConfig.database.user,
  password: DBConfig.database.password,
  database: DBConfig.database.database,
  multipleStatements: false,
  waitForConnections: true,
  connectionLimit: 200,
  queueLimit: 0,
});

export default pool;
