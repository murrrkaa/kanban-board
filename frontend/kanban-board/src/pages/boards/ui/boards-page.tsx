import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { BoardCards } from "@features/board/board-cards/ui/board-cards.tsx";
import { EditBoardModal } from "@features/board/edit-board/ui/edit-board-modal.tsx";

export const BoardsPage = () => {
  return (
    <>
      <PageWrapper title="Dashboards">
        <BoardCards />
      </PageWrapper>
      <EditBoardModal />
    </>
  );
};
