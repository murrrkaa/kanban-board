import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/commentsController.js";

const router = express.Router();

router.get("/", getComments);
router.post("/", createComment);
router.delete("/:id", deleteComment);

export const commentRouter = router;
