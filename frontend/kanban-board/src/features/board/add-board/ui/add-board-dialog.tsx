import { useShallow } from "zustand/react/shallow";
import { Sheet } from "@shared/ui/components/sheet";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";
import { AddBoardForm } from "@features/board/add-board/ui/add-board-form.tsx";

export const AddBoardDialog = () => {
  const { openAddDialog, setOpenAddDialog } = useBoardStore(
    useShallow((state) => ({
      openAddDialog: state.addBoardModal,
      setOpenAddDialog: state.setAddBoardModal,
    })),
  );
  return (
    <Sheet open={openAddDialog} onOpenChange={setOpenAddDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Создание новой доски</SheetHeader>
        <AddBoardForm />
      </SheetContent>
    </Sheet>
  );
};
