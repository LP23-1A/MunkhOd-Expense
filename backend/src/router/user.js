import express from "express";
import {
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
  updateUser,
} from "../controller/user.js";
import { authenticateUser } from "../controller/auth.js";

const user = express.Router();

user.route("/").get(getUsers).post(createUser);
user.route("/user").get(getOneUser).delete(deleteUser).put(updateUser);
user.route("/auth").post(authenticateUser);

export { user };
