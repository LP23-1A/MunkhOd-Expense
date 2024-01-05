import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import cors from "cors";
import { pool } from "./src/utilities/db.js";
import { user } from "./src/router/user.js";

dotenv.config();
const PORT = process.env.PORT || 8001;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bp.json());
app.use("/user", user);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

app.post("/createTable", async (req, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id uuid DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT,
      avatar_img BYTEA,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type TEXT DEFAULT 'MNT'
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error, "error");
  }
});

app.post("/dropTableUsers", async (req, res) => {
  try {
    const tableQueryText = `DROP TABLE users`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/createCategoryTable", async (req, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS category (
      id uuid DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT,
      avatar_img BYTEA,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type TEXT DEFAULT 'MNT'
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});
