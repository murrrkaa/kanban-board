import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IAddUserFormData } from "@features/user/edit-user/model/types.ts";
import { postUser } from "@entities/user/model/post-user.ts";

export const useCreateUser = () => {
  return useMutation({
    mutationKey: [RoutesEnum.USERS],
    mutationFn: (data: IAddUserFormData) => postUser(data),
  });
};
