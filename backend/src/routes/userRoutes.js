import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";
import { permitMiddleware } from "../middleware/permitMiddleware/permitMiddleware.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", permitMiddleware("admin"), createUser);
router.delete("/:id", permitMiddleware("admin"), deleteUser);

router.get("/:id", getUser);

export const userRouter = router;
