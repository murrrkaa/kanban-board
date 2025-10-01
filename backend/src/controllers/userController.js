import { User } from "../models/User.js";
import { requestHandler } from "../helpers/requestHandler.js";

export const getUsers = requestHandler(async (req, res) => {
  const data = await User.getUsers();
  return {
    status: 200,
    data,
  };
});

export const createUser = requestHandler(async (req, res) => {
  const data = await User.createUser(req.body);
  return {
    status: 201,
    data,
  };
});

export const deleteUser = requestHandler(async (req, res) => {
  const { id: id_user } = req.params;
  const data = await User.deleteUser(id_user);

  if (!data) throw { status: 404, message: "User not found" };

  return {
    status: 200,
    data,
  };
});

export const getUser = requestHandler(async (req, res) => {
  const { id: id_user } = req.params;
  const data = await User.getUser(id_user);

  if (!data) throw { status: 404, message: "User not found" };

  return {
    status: 200,
    data,
  };
});
