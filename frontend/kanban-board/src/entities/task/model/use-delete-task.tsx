import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { deleteTask } from "@entities/task/model/delete-task.ts";

export const useDeleteTask = () => {
  return useMutation({
    mutationKey: [RoutesEnum.TASKS],
    mutationFn: (id: string) => deleteTask(id),
  });
};
