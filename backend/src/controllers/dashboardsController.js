import { requestHandler } from "../helpers/requestHandler.js";
import { Dashboard } from "../models/Dashboard.js";

export const getDashboards = requestHandler(async (req, res) => {
  const data = await Dashboard.getDashboards();
  return {
    status: 200,
    data,
  };
});

export const createDashboard = requestHandler(async (req, res) => {
  const data = await Dashboard.createDashboard(req.body);
  return {
    status: 201,
    data,
  };
});

export const deleteDashboard = requestHandler(async (req, res) => {
  const { id: id_dashboard } = req.params;
  const data = await Dashboard.deleteDashboard(id_dashboard);
  return {
    status: 201,
    data,
  };
});
export const getDashboard = requestHandler(async (req, res) => {
  const { id: id_dashboard } = req.params;
  const data = await Dashboard.getDashboard(id_dashboard);
  return {
    status: 200,
    data,
  };
});
