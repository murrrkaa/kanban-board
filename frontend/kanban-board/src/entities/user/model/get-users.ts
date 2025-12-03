import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IUserDto } from "@entities/auth/model/types.ts";

export const getUsers = async (): Promise<IUserDto[]> =>
  await baseApi.get(`${RoutesEnum.USERS}`);
