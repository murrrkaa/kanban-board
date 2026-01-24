import { User } from "../models/User.js";
import { requestHandler } from "../helpers/requestHandler.js";
import bcrypt from "bcrypt";

export const getUsers = requestHandler(async (req, res) => {
  const data = await User.getUsers();
  return {
    status: 200,
    data,
  };
});

export const createUser = requestHandler(async (req, res) => {
  const existingUser = await User.getUserByLogin(req.body.login).catch(
    () => {},
  );

  if (existingUser?.id_user) {
    throw {
      status: 409,
      message: "Пользователь с таким логином уже существует",
    };
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const data = await User.createUser({
    ...req.body,
    password: hashedPassword,
  });
  return {
    status: 201,
    data,
  };
});

export const deleteUser = requestHandler(async (req, res) => {
  const { id: id_user } = req.params;
  const data = await User.deleteUser(id_user);
  return {
    status: 200,
    data,
  };
});

export const getUser = requestHandler(async (req, res) => {
  const { id: id_user } = req.params;
  const data = await User.getUser(id_user);
  return {
    status: 200,
    data,
  };
});

export const updateUser = requestHandler(async (req, res) => {
  const existingUser = await User.getUserByLogin(req.body.login).catch(
    () => {},
  );

  if (existingUser?.id_user) {
    throw {
      status: 409,
      message: "Пользователь с таким логином уже существует",
    };
  }

  const data = await User.updateUser(req.body);
  return {
    status: 200,
    data,
  };
});
