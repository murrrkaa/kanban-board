import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { ITask } from "@entities/task/model/types.ts";
import { objectToQueryString } from "@shared/model/create-query-string.ts";

export const getTasks = async (filters?: object): Promise<ITask[]> =>
  await baseApi.get(`${RoutesEnum.TASKS}${objectToQueryString(filters)}`);
