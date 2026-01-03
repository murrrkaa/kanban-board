import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/ui/components/dropdown";
import { Button } from "@shared/ui/components/button";
import { EditIcon } from "@shared/ui/icons/edit-icon.tsx";
import type { FC } from "react";
import type { ITask } from "@entities/task/model/types.ts";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { useDeleteTask } from "@entities/task/model/use-delete-task.tsx";

interface IProp {
  task: ITask;
}

export const EditTaskMenu: FC<IProp> = ({ task }) => {
  const { mutateAsync: deleteTask } = useDeleteTask();
  const queryClient = useQueryClient();

  const handleEditTask = () => {
    useTaskStore.getState().setSelectedTask(task);
    useTaskStore.getState().setEditTaskModal(true);
  };

  const handleRemoveTask = async () => {
    if (task) await deleteTask(task.id);
    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.BOARDS],
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-[24px] h-[24px] p-0">
          <EditIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem onClick={handleEditTask}>
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleRemoveTask}>Удалить</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
