import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IBoard } from "@features/board/board-cards/model/types.ts";

export const getBoards = async (): Promise<IBoard[]> =>
  await baseApi.get(RoutesEnum.DASHBOARDS);
