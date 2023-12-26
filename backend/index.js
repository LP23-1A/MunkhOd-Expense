import express from "express";
import dotenv from "dotenv";
import postgres from "postgres";
import bp from "body-parser";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bp.json());

app.use(`/`, async (req, res, next) => {
  Pool.query();
  req.body;
});

app.listen(async () => {});
