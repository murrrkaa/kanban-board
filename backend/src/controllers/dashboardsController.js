import { requestHandler } from "../helpers/requestHandler.js";
import { Dashboard } from "../models/Dashboard.js";

export const getDashboards = requestHandler(async (req, res) => {
  const { projectId: id_project, name, boardId: id_dashboard } = req.query;

  const result = await Dashboard.getDashboards({
    id_project,
    name,
    id_dashboard,
  });

  const data = result.map((res) => ({
    id: res.id_dashboard,
    name: res.name,
    description: res.description,
    projectName: res.project_name,
    projectId: res.id_project,
    projectDescription: res.description_project,
    createdAt: res.created_at,
    columns: res.columns,
  }));

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
  const result = await Dashboard.getDashboard(id_dashboard);

  const data = {
    id: result.id_dashboard,
    name: result.name,
    description: result.description,
    projectName: result.project_name,
    projectId: result.id_project,
    projectDescription: result.description_project,
    createdAt: result.created_at,
    columns: result.columns,
  };

  return {
    status: 200,
    data,
  };
});

export const updateDashboard = requestHandler(async (req, res) => {
  const { id: id_dashboard } = req.params;
  const form = {
    id_dashboard,
    name: req.body.data.name,
    description: req.body.data.description,
  };
  const data = await Dashboard.updateDashboard(form);
  return {
    status: 200,
    data,
  };
});
