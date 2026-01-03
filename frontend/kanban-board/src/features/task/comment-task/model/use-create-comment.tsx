import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IComment } from "@entities/task/model/types.ts";
import { postComment } from "@features/task/comment-task/model/post-comment.ts";

export const useCreateComment = () => {
  return useMutation({
    mutationKey: [RoutesEnum.COMMENTS],
    mutationFn: (form: IComment) => postComment(form),
  });
};
