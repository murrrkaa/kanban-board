import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IProjectDto } from "@features/project/project-card/model/types.ts";

export const getProjects = async (): Promise<IProjectDto[]> =>
  await baseApi.get(`${RoutesEnum.PROJECTS}`);
