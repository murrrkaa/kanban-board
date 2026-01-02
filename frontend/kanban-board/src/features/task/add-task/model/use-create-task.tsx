import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type { IAddTaskForm } from "@features/task/add-task/model/types.ts";
import { createTask } from "@features/task/add-task/model/create-task.ts";

export const useCreateTask = (columnId: string) => {
  return useMutation({
    mutationKey: [RoutesEnum.BOARDS, columnId],
    mutationFn: (task: IAddTaskForm) => createTask(task),
  });
};
