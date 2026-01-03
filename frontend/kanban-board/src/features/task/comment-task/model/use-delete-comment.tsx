import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { deleteComment } from "@features/task/comment-task/model/delete-comment.ts";

export const useDeleteComment = () => {
  return useMutation({
    mutationKey: [RoutesEnum.COMMENTS],
    mutationFn: (id: string) => deleteComment(id),
  });
};
