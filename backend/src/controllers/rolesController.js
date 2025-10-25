import { requestHandler } from "../helpers/requestHandler.js";
import { Role } from "../models/Role.js";

export const getRoles = requestHandler(async (req, res) => {
  const data = await Role.getRoles();
  return {
    status: 200,
    data,
  };
});
