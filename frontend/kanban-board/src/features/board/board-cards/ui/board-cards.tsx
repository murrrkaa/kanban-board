import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import { BoardCard } from "@entities/board/board-card/ui/board-card.tsx";
import { useGetBoards } from "@features/board/board-cards/model/use-get-boards.tsx";

export const BoardCards = () => {
  const { data } = useGetBoards();

  return (
    <TableWrapper className="p-[30px] flex flex-row flex-wrap gap-[8px]">
      {data?.map((board) => (
        <BoardCard board={board} />
      ))}
    </TableWrapper>
  );
};
