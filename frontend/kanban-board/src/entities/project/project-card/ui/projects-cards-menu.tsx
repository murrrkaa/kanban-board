import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/ui/components/dropdown";
import { Button } from "@shared/ui/components/button";
import { MoreIcon } from "@shared/ui/icons/more-icon.tsx";
import { useProjectsStore } from "@entities/project/project-card/model/use-projects-store.tsx";
import type { IProjectDto } from "@features/project/project-card/model/types.ts";
import type { FC } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteProject } from "@entities/project/project-card/model/use-delete-project.tsx";
import { RoutesEnum } from "@shared/routes";

interface IProp {
  project: IProjectDto | null;
}

export const ProjectsCardsMenu: FC<IProp> = ({ project }) => {
  const { mutateAsync: deleteProject } = useDeleteProject();
  const queryClient = useQueryClient();

  const handleEditProject = () => {
    useProjectsStore.getState().setProject(project);
    useProjectsStore.getState().setEditProjectModal(true);
  };

  const handleRemoveProject = async () => {
    if (project) await deleteProject(project.id);
    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.PROJECTS],
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0">
          <MoreIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem onClick={handleEditProject}>
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleRemoveProject}>
          Удалить
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
