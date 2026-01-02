import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const deleteBoard = async (id: string) =>
  await baseApi.delete(`${RoutesEnum.BOARDS}/${id}`);
