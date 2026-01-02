import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const deleteTask = async (id: string) =>
  await baseApi.delete(`${RoutesEnum.TASKS}/${id}`);
