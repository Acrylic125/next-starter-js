import mysql from "mysql2/promise";
import DBConfig from "./db-config";

const pool = mysql.createPool({
  host: DBConfig.host,
  port: DBConfig.port,
  user: DBConfig.user,
  password: DBConfig.password,
  database: DBConfig.database,
  multipleStatements: false,
  waitForConnections: true,
  connectionLimit: 200,
  queueLimit: 0,
});

export default pool;
