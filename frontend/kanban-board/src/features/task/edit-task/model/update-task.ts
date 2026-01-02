import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IUpdateTask } from "@features/task/add-task/model/types.ts";

export const updateTask = async (form: IUpdateTask) =>
  await baseApi.put(`${RoutesEnum.TASKS}/${form.id}`, form);
