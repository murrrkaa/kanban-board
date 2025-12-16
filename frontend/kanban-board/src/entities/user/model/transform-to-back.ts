import type { IUser, IUserDto } from "@entities/auth/model/types.ts";

export const transformToBack = (data: IUser): IUserDto => {
  return {
    id_user: data.id,
    id_role: data.roleId,
    name: data.name,
    surname: data.surname ?? "",
    login: data.login,
    patronymic: data.patronymic ?? "",
  };
};
