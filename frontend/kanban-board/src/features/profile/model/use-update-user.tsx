import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IFormData } from "@features/profile/model/types.ts";
import { putUser } from "@features/profile/model/put-user.ts";

export const useUpdateUser = () => {
  return useMutation({
    mutationKey: [RoutesEnum.PROFILE],
    mutationFn: (data: IFormData) => putUser(data),
  });
};
