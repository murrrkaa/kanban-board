import express from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);
router.delete("/:id", deleteProject);

router.get("/:id", getProject);

export const projectRouter = router;
