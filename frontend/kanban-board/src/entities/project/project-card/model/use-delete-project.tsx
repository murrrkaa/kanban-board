import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { deleteProject } from "@entities/project/project-card/model/delete-project.ts";

export const useDeleteProject = () => {
  return useMutation({
    mutationKey: [RoutesEnum.PROJECTS],
    mutationFn: (id: string) => deleteProject(id),
  });
};
