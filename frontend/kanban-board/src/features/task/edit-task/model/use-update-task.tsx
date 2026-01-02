import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { updateTask } from "@features/task/edit-task/model/update-task.ts";
import type { IUpdateTask } from "@features/task/add-task/model/types.ts";

export const useUpdateTask = () => {
  return useMutation({
    mutationKey: [RoutesEnum.TASKS],
    mutationFn: (form: IUpdateTask) => updateTask(form),
  });
};
