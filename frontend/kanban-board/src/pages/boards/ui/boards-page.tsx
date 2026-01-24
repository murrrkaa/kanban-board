import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { BoardCards } from "@features/board/board-cards/ui/board-cards.tsx";
import { EditBoardModal } from "@features/board/edit-board/ui/edit-board-modal.tsx";
import { Button } from "@shared/ui/components/button";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";
import { AddBoardDialog } from "@features/board/add-board/ui/add-board-dialog.tsx";
import { Input } from "@shared/ui/components/input";
import { useState } from "react";

export const BoardsPage = () => {
  const [value, setValue] = useState("");

  const handleOpenAddDialog = () => {
    useBoardStore.getState().setAddBoardModal(true);
  };
  return (
    <>
      <PageWrapper
        title="Boards"
        leftSlot={
          <div className="flex flex-row gap-3 items-center">
            <Input
              value={value}
              classNames={{
                inputClassName: "w-[250px]",
              }}
              placeholder="Наименование доски"
              onChange={(e) => setValue(e.target.value)}
            />
            <Button className="h-[40px]" onClick={handleOpenAddDialog}>
              Создание доски
            </Button>
          </div>
        }
      >
        <BoardCards boardName={value} />
      </PageWrapper>
      <EditBoardModal />
      <AddBoardDialog />
    </>
  );
};
