import { requestHandler } from "../helpers/requestHandler.js";
import { Task } from "../models/Task.js";
import { User } from "../models/User.js";

export const getTasks = requestHandler(async (req, res) => {
  const { boardColumnId: id_board_column, name } = req.query;
  const data = await Task.getTasks({
    id_board_column,
    name,
  });
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
  const transformedData = {
    name: req.body.name,
    priority: req.body.priority,
    id_board_column: req.body.boardColumnId,
    id_performer: req.body.performerId,
    description: req.body.description,
  };

  const data = await Task.createTask(transformedData);

  return {
    status: 200,
    data,
  };
});

export const updateTask = requestHandler(async (req, res) => {
  const form = {
    name: req.body.name,
    priority: req.body.priority,
    id_board_column: req.body.boardColumnId,
    id_performer: req.body.performerId,
    description: req.body.description,
    id: req.body.id,
  };
  const data = await Task.updateTask(form);
  return {
    status: 200,
    data,
  };
});
