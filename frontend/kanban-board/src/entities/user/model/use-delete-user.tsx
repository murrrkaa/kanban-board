import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { deleteUser } from "@entities/user/model/delete-user.ts";

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: [RoutesEnum.USERS],
    mutationFn: (id: string) => deleteUser(id),
  });
};
