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

interface IProp {
  project: IProjectDto | null;
}

export const ProjectsCardsMenu: FC<IProp> = ({ project }) => {
  const handleEditProject = () => {
    useProjectsStore.getState().setProject(project);
    useProjectsStore.getState().setEditProjectModal(true);
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
        <DropdownMenuItem>Удалить</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
