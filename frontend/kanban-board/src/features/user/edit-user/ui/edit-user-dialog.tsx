import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@shared/ui/components/sheet/sheet.tsx";
import type { FC, ReactNode } from "react";
import type { IUser } from "@entities/auth/model/types.ts";
import { EditUserForm } from "@features/user/edit-user/ui/edit-user-form.tsx";

interface IProps {
  trigger: ReactNode;
  user: IUser;
}

export const EditUserDialog: FC<IProps> = ({ trigger, user }) => {
  if (!user) return;
  return (
    <Sheet>
      <SheetTitle></SheetTitle>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>Редактирование пользователя</SheetHeader>
        <EditUserForm user={user} />
      </SheetContent>
    </Sheet>
  );
};
