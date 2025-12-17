import { Sheet } from "@shared/ui/components/sheet";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { AddUserForm } from "@features/user/add-user-dialog/ui/add-user-form.tsx";
import { useUserDialogStore } from "@entities/user/model/use-user-dialog-store.tsx";
import { useShallow } from "zustand/react/shallow";

export const AddUserDialog = () => {
  const { openAddDialog, setOpenAddDialog } = useUserDialogStore(
    useShallow((state) => ({
      openAddDialog: state.openAddDialog,
      setOpenAddDialog: state.setOpenAddDialog,
    })),
  );
  return (
    <Sheet open={openAddDialog} onOpenChange={setOpenAddDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Добавление пользователя</SheetHeader>
        <AddUserForm />
      </SheetContent>
    </Sheet>
  );
};
