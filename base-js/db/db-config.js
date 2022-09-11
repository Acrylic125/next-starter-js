import * as yup from "yup";

const DBConfigSchema = yup.object().shape({
  host: yup.string().required(),
  port: yup.number().integer().required(),
  user: yup.string().required(),
  password: yup.string().required(),
  database: yup.string().required(),
});

const DBConfig = DBConfigSchema.cast({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default DBConfig;
