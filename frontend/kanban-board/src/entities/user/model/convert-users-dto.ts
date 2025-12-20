import type { IUser, IUserDto } from "@entities/auth/model/types.ts";

export const convertUsersDto = (data: IUserDto[]): IUser[] => {
  return data.map((user) => ({
    id: user?.id_user,
    roleId: user?.id_role,
    name: user?.name,
    surname: user?.surname,
    login: user?.login,
    patronymic: user?.patronymic,
    roleName: user?.role_name,
  }));
};
