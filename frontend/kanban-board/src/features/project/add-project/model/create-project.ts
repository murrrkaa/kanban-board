import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IAddProjectDto } from "@features/project/add-project/model/types.ts";

export const postProject = async (data: IAddProjectDto) =>
  await baseApi.post(`${RoutesEnum.PROJECTS}`, data);
