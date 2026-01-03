import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import { BoardCard } from "@entities/board/board-card/ui/board-card.tsx";
import { useGetBoards } from "@features/board/board-cards/model/use-get-boards.tsx";
import { useSearchParams } from "react-router-dom";

export const BoardCards = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  const { data } = useGetBoards({
    projectId,
  });

  return (
    <TableWrapper className="p-[30px] flex flex-row flex-wrap gap-[8px]">
      {data?.map((board, index) => (
        <BoardCard board={board} key={index} />
      ))}
    </TableWrapper>
  );
};
