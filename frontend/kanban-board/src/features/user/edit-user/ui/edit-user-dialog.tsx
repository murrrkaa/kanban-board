import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@shared/ui/components/sheet/sheet.tsx";
import type { FC, ReactNode } from "react";
import type { IUser } from "@entities/auth/model/types.ts";

interface IProps {
  trigger: ReactNode;
  user: IUser;
}

export const EditUserDialog: FC<IProps> = ({ trigger, user }) => {
  if (!user) return;
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>Редактирование пользователя</SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
