import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const data = await User.getUsers();
    return res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const data = await User.createUser(req.body);
    return res.status(201).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id: id_user } = req.params;
    const data = await User.deleteUser(id_user);

    if (!data) return res.status(404).json({ error: "User not found" });

    return res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id: id_user } = req.params;
    if (!id_user) return res.status(404).json({ error: "Not found id_user" });
    const data = await User.getUser(id_user);
    return res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
