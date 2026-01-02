import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IAddBoardDto } from "@features/board/add-board/model/types.ts";

export const postBoard = async (data: IAddBoardDto) =>
  await baseApi.post(`${RoutesEnum.BOARDS}`, data);
