import type { IBoard } from "@features/board/board-cards/model/types.ts";
import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";

export const getBoard = async (id: string): Promise<IBoard> =>
  await baseApi.get(`${RoutesEnum.BOARDS}/${id}`);
