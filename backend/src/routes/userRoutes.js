import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { permitMiddleware } from "../middleware/permitMiddleware/permitMiddleware.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", permitMiddleware("Administrator"), createUser);
router.delete("/:id", permitMiddleware("Administrator"), deleteUser);

router.get("/:id", getUser);
router.put("/:id", updateUser);

export const userRouter = router;
