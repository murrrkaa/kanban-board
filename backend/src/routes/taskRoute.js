import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
} from "../controllers/tasksController.js";

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.delete("/:id", deleteTask);

export const taskRouter = router;
