import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IBoard } from "@features/board/board-cards/model/types.ts";
import { objectToQueryString } from "@shared/model/create-query-string.ts";

export const getBoards = async (filters?: object): Promise<IBoard[]> =>
  await baseApi.get(`${RoutesEnum.BOARDS}${objectToQueryString(filters)}`);
