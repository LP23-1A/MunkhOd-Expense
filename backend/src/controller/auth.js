import { pool } from "../utilities/db.js";
export const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const queryText = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
    const find = await pool.query(queryText);

    console.log(find);
    if (!find.rows[0].email || !find.rows[0].password) {
      res.send({
        success: false,
        msg: "Auth failed",
      });
    }

    res.send({ success: true, result: find.rows[0] });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
