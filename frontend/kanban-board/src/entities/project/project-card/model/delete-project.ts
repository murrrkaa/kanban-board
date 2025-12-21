import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const deleteProject = async (id: string) =>
  await baseApi.delete(`${RoutesEnum.PROJECTS}/${id}`);
