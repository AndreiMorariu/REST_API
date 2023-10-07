import express from "express";
const router = express.Router();

import {
  getUsers,
  createUser,
  updateUser,
  getUser,
  deleteUser,
} from "../controllers/userController.js";

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
