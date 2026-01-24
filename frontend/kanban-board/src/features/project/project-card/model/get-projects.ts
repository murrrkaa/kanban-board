import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IProjectDto } from "@features/project/project-card/model/types.ts";
import { objectToQueryString } from "@shared/model/create-query-string.ts";

export const getProjects = async (
  projectName?: string,
): Promise<IProjectDto[]> =>
  await baseApi.get(
    `${RoutesEnum.PROJECTS}${objectToQueryString({ projectName })}`,
  );
