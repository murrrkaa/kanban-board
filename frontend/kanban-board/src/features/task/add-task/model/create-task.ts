import type { IAddTaskForm } from "@features/task/add-task/model/types.ts";
import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const createTask = async (task: IAddTaskForm) =>
  await baseApi.post(`${RoutesEnum.TASKS}`, task);
