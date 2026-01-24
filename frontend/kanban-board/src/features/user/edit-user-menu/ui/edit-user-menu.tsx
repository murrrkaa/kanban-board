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
import { useDeleteUser } from "@entities/user/model/use-delete-user.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";

interface IProps {
  user: IUser;
}

export const EditUserMenu: FC<IProps> = ({ user }) => {
  const currUser = useAuthStore.getState().user;
  const { mutateAsync: deleteUser } = useDeleteUser();
  const queryClient = useQueryClient();

  const handleEditUser = () => {
    useUserDialogStore.getState().setUser(user);
    useUserDialogStore.getState().setOpenEditDialog(true);
  };

  const handleRemoveUser = async () => {
    if (user) await deleteUser(user.id);
    queryClient.invalidateQueries({
      queryKey: [RoutesEnum.USERS],
    });
    useUserDialogStore.getState().setUser(null);
  };

  const isDisabled = currUser?.roleName === "Пользователь";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <MoreIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem onClick={handleEditUser} disabled={isDisabled}>
          Редактировать
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleRemoveUser} disabled={isDisabled}>
          Удалить
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
