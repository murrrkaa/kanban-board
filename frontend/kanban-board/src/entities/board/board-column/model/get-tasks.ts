import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { ITask } from "@entities/task/model/types.ts";

export const getTasks = async (id: string): Promise<ITask[]> =>
  await baseApi.get(
    `${RoutesEnum.TASKS}${RoutesEnum.BY_COLUMN_BOARD}?boardColumnId=${id}`,
  );
