import { requestHandler } from "../helpers/requestHandler.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = requestHandler(async (req, res) => {
  const { login, password } = req.body;
  const user = await User.getUserByLogin(login);

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) throw { status: 404, message: "Invalid password" };

  const payload = {
    id: user.id_user,
    login: user.login,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });

  return {
    status: 200,
    data: {
      message: "Успешный вход",
      token,
    },
  };
});
