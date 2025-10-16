import { requestHandler } from "../helpers/requestHandler.js";
import { Comment } from "../models/Comment.js";

export const getComments = requestHandler(async (req, res) => {
  const { id: id_task } = req.params;
  const data = await Comment.getComments(id_task);
  return {
    status: 200,
    data,
  };
});
export const createComment = requestHandler(async (req, res) => {
  const { id: id_task } = req.params;
  const data = await Comment.createComment({ ...req.body, id_task });
  return {
    status: 201,
    data,
  };
});
export const deleteComment = requestHandler(async (req, res) => {
  const { id: id_comment } = req.params;
  const data = await Comment.deleteComment(id_comment);
  return {
    status: 200,
    data,
  };
});
