import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { BoardCards } from "@features/board/board-cards/ui/board-cards.tsx";
import { EditBoardModal } from "@features/board/edit-board/ui/edit-board-modal.tsx";
import { Button } from "@shared/ui/components/button";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";
import { AddBoardDialog } from "@features/board/add-board/ui/add-board-dialog.tsx";

export const BoardsPage = () => {
  const handleOpenAddDialog = () => {
    useBoardStore.getState().setAddBoardModal(true);
  };
  return (
    <>
      <PageWrapper
        title="Dashboards"
        leftSlot={
          <Button className="h-[40px]" onClick={handleOpenAddDialog}>
            Создание доски
          </Button>
        }
      >
        <BoardCards />
      </PageWrapper>
      <EditBoardModal />
      <AddBoardDialog />
    </>
  );
};
