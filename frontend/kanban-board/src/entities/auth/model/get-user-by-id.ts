import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IUser } from "@entities/auth/model/types.ts";

export const getUserById = async (userId: string): Promise<IUser> =>
  await baseApi.get(`${RoutesEnum.USERS}/${userId}`);
