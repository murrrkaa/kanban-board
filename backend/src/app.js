import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes.js";
import { errorHandler } from "./helpers/errorHandler.js";
import { projectRouter } from "./routes/projectRoutes.js";
import { commentRouter } from "./routes/commentRoutes.js";
import { dashboardRoutes } from "./routes/dashboardRoutes.js";
import { roleRouter } from "./routes/roleRoute.js";
import { taskRouter } from "./routes/taskRoute.js";
import { loginRouter } from "./routes/loginRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware/authMiddleware.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN_FRONTEND_URL,
  }),
);

app.use("/api/users", authMiddleware, userRouter);
app.use("/api/roles", authMiddleware, roleRouter);
app.use("/api/projects", authMiddleware, projectRouter);
app.use("/api/dashboards", authMiddleware, dashboardRoutes);
app.use("/api/task", authMiddleware, taskRouter);
app.use("/api/tasks/:id/comments", authMiddleware, commentRouter);
app.use("/api/login", loginRouter);

app.use((err, req, res, next) => errorHandler(err, req, res, next));

app.listen(process.env.PORT, () => console.log("SERVER STARTED"));
