import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import { BoardCard } from "@entities/board/board-card/ui/board-card.tsx";
import { useGetBoards } from "@features/board/board-cards/model/use-get-boards.tsx";
import { useSearchParams } from "react-router-dom";
import { EmptyBoards } from "@/pages/boards/ui/empty-boards.tsx";
import type { FC } from "react";

interface IProps {
  boardName?: string;
}

export const BoardCards: FC<IProps> = ({ boardName }) => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  const { data } = useGetBoards({
    projectId,
    boardName,
  });

  return (
    <TableWrapper className="p-[30px] flex flex-row flex-wrap gap-[8px]">
      {data && data?.length > 0 ? (
        data?.map((board, index) => <BoardCard board={board} key={index} />)
      ) : (
        <EmptyBoards />
      )}
    </TableWrapper>
  );
};
