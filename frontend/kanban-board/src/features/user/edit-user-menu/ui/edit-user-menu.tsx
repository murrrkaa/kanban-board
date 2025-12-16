import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@shared/ui/components/dropdown";
import { Button } from "@shared/ui/components/button";
import { MoreIcon } from "@shared/ui/icons/more-icon.tsx";
import type { IUser } from "@entities/auth/model/types.ts";
import { type FC } from "react";
import { useUserDialogStore } from "@entities/user/model/use-user-dialog-store.tsx";

interface IProps {
  user: IUser;
}

const EditUserMenu: FC<IProps> = ({ user }) => {
  const handleEditUser = () => {
    useUserDialogStore.getState().setUser(user);
    useUserDialogStore.getState().setOpenEditDialog(true);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <MoreIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem onClick={handleEditUser}>
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem>Удалить</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
