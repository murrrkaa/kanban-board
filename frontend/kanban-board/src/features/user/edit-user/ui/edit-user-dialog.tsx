import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { EditUserForm } from "@features/user/edit-user/ui/edit-user-form.tsx";
import { useUserDialogStore } from "@entities/user/model/use-user-dialog-store.tsx";
import { useShallow } from "zustand/react/shallow";

export const EditUserDialog = () => {
  const { open, setOpenDialog } = useUserDialogStore(
    useShallow((state) => ({
      open: state.openEditDialog,
      setOpenDialog: state.setOpenEditDialog,
    })),
  );
  return (
    <Sheet open={open} onOpenChange={setOpenDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Редактирование пользователя</SheetHeader>
        <EditUserForm />
      </SheetContent>
    </Sheet>
  );
};
