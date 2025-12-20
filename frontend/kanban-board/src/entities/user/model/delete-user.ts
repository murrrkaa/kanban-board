import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const deleteUser = async (id: string) =>
  await baseApi.delete(`${RoutesEnum.USERS}/${id}`);
