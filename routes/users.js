import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  getUsers,
  saveUser,
  getSpecificUser,
  deleteUser,
  updateuser,
} from "../controllers/users.js";
const router = express.Router();

let users = [];

router.get("/", getUsers);

router.post("/", saveUser);

router.get("/:id", getSpecificUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateuser);

export default router;
