import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IFormData } from "@features/profile/model/types.ts";
import { putUser } from "@features/profile/model/put-user.ts";
import type { IUserDto } from "@entities/auth/model/types.ts";
import { convertUserDto } from "@entities/auth/model/convert-user-dto.ts";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";

export const useUpdateUser = () => {
  return useMutation({
    mutationKey: [RoutesEnum.PROFILE],
    mutationFn: (data: IFormData) => putUser(data),
    onSuccess: (data: IUserDto) => {
      const updatedUser = convertUserDto(data);
      console.log(updatedUser);
      useAuthStore.getState().setUser(updatedUser);
    },
  });
};
