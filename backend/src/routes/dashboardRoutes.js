import express from "express";
import {
  createDashboard,
  deleteDashboard,
  getDashboard,
  getDashboards,
  updateDashboard,
} from "../controllers/dashboardsController.js";

const router = express.Router();

router.get("/", getDashboards);
router.post("/", createDashboard);
router.delete("/:id", deleteDashboard);

router.get("/:id", getDashboard);
router.put("/:id", updateDashboard);

export const dashboardRoutes = router;
