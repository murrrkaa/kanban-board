import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { updateProject } from "@features/project/edit-project/model/update-project.ts";
import type { IProjectDto } from "@features/project/project-card/model/types.ts";

export const useUpdateProject = () => {
  return useMutation({
    mutationKey: [RoutesEnum.PROJECTS],
    mutationFn: (data: IProjectDto) => updateProject(data),
  });
};
