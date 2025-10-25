import { Project } from "../models/Project.js";
import { requestHandler } from "../helpers/requestHandler.js";

export const getProjects = requestHandler(async (req, res) => {
  const data = await Project.getProjects();
  return {
    status: 200,
    data,
  };
});

export const createProject = requestHandler(async (req, res) => {
  const data = await Project.createProject(req.body);
  return {
    status: 201,
    data,
  };
});

export const deleteProject = requestHandler(async (req, res) => {
  const { id: id_project } = req.params;
  const data = await Project.deleteProject(id_project);
  return {
    status: 200,
    data,
  };
});

export const getProject = requestHandler(async (req, res) => {
  const { id: id_project } = req.params;
  const data = await Project.getProject(id_project);
  return {
    status: 200,
    data,
  };
});
