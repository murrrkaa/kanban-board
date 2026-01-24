import { Project } from "../models/Project.js";
import { requestHandler } from "../helpers/requestHandler.js";

export const getProjects = requestHandler(async (req, res) => {
  const { projectName } = req.query;
  const result = await Project.getProjects({ projectName });

  const data = result.map((item) => ({
    id: item.id_project,
    name: item.name,
    description: item.description,
    createdAt: item.created_at,
    performer: {
      id: item.performer_id,
      name: item.performer_name,
      surname: item.performer_surname,
      patronymic: item.performer_patronymic,
    },
  }));
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

export const updateProject = requestHandler(async (req, res) => {
  const { id: id_project } = req.params;
  const form = {
    id_project,
    name: req.body.data.name,
    description: req.body.data.description,
  };
  const data = await Project.updateProject(form);
  return {
    status: 200,
    data,
  };
});
