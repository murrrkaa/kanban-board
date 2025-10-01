import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN_FRONTEND_URL,
  }),
);

app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => console.log("SERVER STARTED"));
