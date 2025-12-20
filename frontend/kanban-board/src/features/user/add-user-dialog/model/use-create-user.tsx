import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IAddUserFormData } from "@features/user/edit-user/model/types.ts";
import { postUser } from "@entities/user/model/post-user.ts";
import type { IUserDto } from "@entities/auth/model/types.ts";

export const useCreateUser = () => {
  return useMutation({
    mutationKey: [RoutesEnum.USERS],
    mutationFn: (data: IAddUserFormData) => {
      const transformedData: IUserDto = {
        name: data.name,
        surname: data.surname,
        patronymic: data.patronymic ?? null,
        login: data.login,
        id_role: data.role,
        password: data.password,
      };
      return postUser(transformedData);
    },
  });
};
