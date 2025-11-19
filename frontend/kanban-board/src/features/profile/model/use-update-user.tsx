import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IFormData } from "@features/profile/model/types.ts";
import { putUser } from "@features/profile/model/put-user.ts";
import type { IUser, IUserDto } from "@entities/auth/model/types.ts";
import { convertUserDto } from "@entities/auth/model/convert-user-dto.ts";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";
import { transformToBack } from "@features/profile/model/transform-to-back.ts";

export const useUpdateUser = () => {
  const user = useAuthStore((state) => state.user);

  return useMutation({
    mutationKey: [RoutesEnum.PROFILE],
    mutationFn: ({
      field,
      value,
    }: {
      field: keyof IFormData;
      value: string;
    }) => {
      const formData: IUser = {
        ...user,
        [field]: value,
      } as IUser;

      const transformedData = transformToBack(formData);
      return putUser(transformedData);
    },
    onSuccess: (data: IUserDto) => {
      const updatedUser = convertUserDto(data);
      useAuthStore.getState().setUser(updatedUser);
    },
  });
};
