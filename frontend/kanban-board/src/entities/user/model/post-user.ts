import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IUserDto } from "@entities/auth/model/types.ts";

export const postUser = async (data: IUserDto) =>
  await baseApi.post(`${RoutesEnum.USERS}`, data);
