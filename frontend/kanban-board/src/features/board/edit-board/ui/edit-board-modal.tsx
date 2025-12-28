import { useShallow } from "zustand/react/shallow";
import { Sheet } from "@shared/ui/components/sheet";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";
import { EditBoardForm } from "@features/board/edit-board/ui/edit-board-form.tsx";

export const EditBoardModal = () => {
  const { open, setOpenDialog } = useBoardStore(
    useShallow((state) => ({
      open: state.editBoardModal,
      setOpenDialog: state.setEditBoardModal,
    })),
  );
  return (
    <Sheet open={open} onOpenChange={setOpenDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Редактирование доски</SheetHeader>
        <EditBoardForm />
      </SheetContent>
    </Sheet>
  );
};
