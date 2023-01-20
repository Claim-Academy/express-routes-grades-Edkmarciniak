import dotenv from "dotenv";

dotenv.config();

export default {
  getDbConn: process.env.DB_CONN,
};
