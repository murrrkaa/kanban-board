import type { ColumnDef } from "@tanstack/react-table";
import type { IUser } from "@entities/auth/model/types.ts";

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
];
