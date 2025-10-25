import { requestHandler } from "../helpers/requestHandler.js";
import { Task } from "../models/Task.js";

export const getTasks = requestHandler(async (req, res) => {
  const data = await Task.getTasks();
  return {
    status: 200,
    data,
  };
});

export const getTask = requestHandler(async (req, res) => {
  const { id: id_task } = req.params;
  const data = await Task.getTask(id_task);
  return {
    status: 200,
    data,
  };
});

export const deleteTask = requestHandler(async (req, res) => {
  const { id: id_task } = req.params;
  const data = await Task.deleteTask(id_task);
  return {
    status: 200,
    data,
  };
});

export const createTask = requestHandler(async (req, res) => {
  const data = await Task.createTask(req.body);
  return {
    status: 200,
    data,
  };
});
