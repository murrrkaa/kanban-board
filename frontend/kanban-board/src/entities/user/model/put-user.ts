import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IUserDto } from "@entities/auth/model/types.ts";

export const putUser = async (data: IUserDto): Promise<IUserDto> =>
  baseApi.put(`${RoutesEnum.USERS}/${data.id_user}`, data);
