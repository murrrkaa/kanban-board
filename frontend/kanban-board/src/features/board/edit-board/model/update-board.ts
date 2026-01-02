import { baseApi } from "@shared/instance.ts";
import { RoutesEnum } from "@shared/routes";
import type { IBoard } from "@features/board/board-cards/model/types.ts";

export const updateBoard = async (form: IBoard) =>
  await baseApi.put(`${RoutesEnum.BOARDS}/${form.id}`, { data: form });
