import type { IUser, IUserDto } from "@entities/auth/model/types.ts";

export const convertUserDto = (user: IUserDto): IUser => {
  return {
    id: user.id_user,
    roleId: user.id_role,
    name: user.name,
    surname: user.surname,
    login: user.login,
    patronymic: user.patronymic,
  };
};
