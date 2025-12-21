import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IProjectDto } from "@features/project/project-card/model/types.ts";

export const updateProject = async (form: IProjectDto) =>
  await baseApi.put(`${RoutesEnum.PROJECTS}/${form.id}`, { data: form });
