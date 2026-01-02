import { Title } from "@shared/ui/components/title";
import type { IBoard } from "@features/board/board-cards/model/types.ts";
import type { FC } from "react";
import { BoardCardsMenu } from "@entities/board/board-card/ui/board-cards-menu.tsx";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@shared/routes";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";

interface IProps {
  board: IBoard;
}

export const BoardCard: FC<IProps> = ({ board }) => {
  const handleSelectBoard = () => {
    useBoardStore.getState().setBoard(board);
  };
  return (
    <div className="w-[366px] h-fit bg-white rounded-[16px] shadow-md">
      <div className="p-[15px] flex flex-col gap-[16px]">
        <div className="flex flex-row items-start justify-between gap-[8px]">
          <Link
            to={`${RoutesEnum.BOARDS}/${board.id}`}
            onClick={handleSelectBoard}
          >
            <Title size="sm" className="line-clamp-2 trunacate text-ellipsis">
              {board?.name}
            </Title>
          </Link>

          <BoardCardsMenu board={board} />
        </div>
        {board?.projectName && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Наименование проекта
            </div>
            <span className="text-[16px]/[20px] text-gray-700">
              {board.projectName}
            </span>
          </div>
        )}

        {board?.createdAt && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Дата создания
            </div>
            <span className="text-[16px]/[20px] text-gray-700">
              {new Date(board?.createdAt).toLocaleDateString()}
            </span>
          </div>
        )}
        {board?.description && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Описание доски
            </div>
            <p className="line-clamp-3 truncate text-[16px]/[20px] text-gray-50">
              {board?.description}
            </p>
          </div>
        )}
        {board?.projectDescription && (
          <div>
            <div className="text-[14px]/[16px] text-blue-500 font-medium">
              Описание проекта
            </div>
            <p className="line-clamp-3 truncate text-[16px]/[20px] text-gray-50">
              {board?.projectDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
