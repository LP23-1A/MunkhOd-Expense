import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;

dotenv.config();

const pool = new Pool({
  ssl: true,
  connectionString: process.env.DB_URL,
});

pool.connect();
pool.query();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
