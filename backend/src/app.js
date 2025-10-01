import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes.js";
import { errorHandler } from "./helpers/errorHandler.js";
import { projectRouter } from "./routes/projectRoutes.js";
import { commentRouter } from "./routes/commentRoutes.js";
import { dashboardRoutes } from "./routes/dashboardRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN_FRONTEND_URL,
  }),
);

app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/dashboards", dashboardRoutes);
app.use("/api/tasks/:id/comments", commentRouter);

app.use((err, req, res, next) => errorHandler(err, req, res, next));

app.listen(process.env.PORT, () => console.log("SERVER STARTED"));
