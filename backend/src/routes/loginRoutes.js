import express from "express";
import { loginUser } from "../controllers/loginController.js";

const router = express.Router();

router.post("/", loginUser);

export const loginRouter = router;
