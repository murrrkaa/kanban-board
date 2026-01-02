import { useMutation } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import type {
  IAddBoardDto,
  IAddBoardForm,
} from "@features/board/add-board/model/types.ts";
import { postBoard } from "@features/board/add-board/model/post-board.ts";

export const useCreateBoard = () => {
  return useMutation({
    mutationKey: [RoutesEnum.BOARDS],
    mutationFn: (data: IAddBoardForm) => {
      const transformedData: IAddBoardDto = {
        name: data.name || "Новая доска",
        description: data.description,
        id_project: data.projectId || null,
      };
      return postBoard(transformedData);
    },
  });
};
