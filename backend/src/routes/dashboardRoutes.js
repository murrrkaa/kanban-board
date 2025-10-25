import express from "express";
import {
  createDashboard,
  deleteDashboard,
  getDashboard,
  getDashboards,
} from "../controllers/dashboardsController.js";

const router = express.Router();

router.get("/", getDashboards);
router.post("/", createDashboard);
router.delete("/:id", deleteDashboard);

router.get("/:id", getDashboard);

export const dashboardRoutes = router;
