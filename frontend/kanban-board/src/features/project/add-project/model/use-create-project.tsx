import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type {
  IAddProjectDto,
  IAddProjectForm,
} from "@features/project/add-project/model/types.ts";
import { postProject } from "@features/project/add-project/model/create-project.ts";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";

export const useCreateProject = () => {
  return useMutation({
    mutationKey: [RoutesEnum.PROJECTS],
    mutationFn: (data: IAddProjectForm) => {
      const transformedData: IAddProjectDto = {
        name: data.name || "Новый проект",
        description: data.description,
        id_created_by: data.createdBy || useAuthStore.getState().user!.id,
      };
      return postProject(transformedData);
    },
  });
};
