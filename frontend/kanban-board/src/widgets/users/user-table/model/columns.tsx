import type { ColumnDef } from "@tanstack/react-table";
import type { IUser } from "@entities/auth/model/types.ts";
import { EditUserDialog } from "@features/user/edit-user/ui";
import { Button } from "@shared/ui/components/button";
import { MoreIcon } from "@shared/ui/icons/more-icon.tsx";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: "Имя",
  },
  {
    accessorKey: "surname",
    header: "Фамилия",
  },
  {
    accessorKey: "patronymic",
    header: "Отчество",
  },
  {
    accessorKey: "login",
    header: "Логин",
  },
  // {
  //   accessorKey: "roleId", // TODO: заменить на название роли
  //   header: "Роль",
  // },
  {
    header: "Настройки",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <EditUserDialog
          user={user}
          trigger={
            <Button variant="ghost">
              <MoreIcon />
            </Button>
          }
        />
      );
    },
  },
];
