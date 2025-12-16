import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@shared/ui/components/table";
import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import { useGetUsers } from "@entities/user/model/use-get-users.tsx";
import { useUsersStore } from "@entities/user/model/use-users-store.tsx";
import { useEffect } from "react";
import { convertUsersDto } from "@entities/user/model/convert-users-dto.ts";
import {
  type Cell,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "@widgets/users/user-table/model/columns.tsx";
import type { IUser } from "@entities/auth/model/types.ts";

export const UserTable = () => {
  const { data, isSuccess } = useGetUsers();
  const users = useUsersStore((state) => state.users);

  const table = useReactTable({
    data: users,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  useEffect(() => {
    if (data && isSuccess) {
      const users = convertUsersDto(data);
      useUsersStore.getState().setUsers(users);
    }
  }, [data, isSuccess]);

  return (
    <TableWrapper title="Users List Table">
      <Table>
        <TableHead>
          <TableRow>
            {table.getHeaderGroups()[0].headers.map((header) => (
              <TableHeaderCell key={header.id} className="pl-[10px]">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell: Cell<IUser, any>) => (
                <TableCell key={cell.id} className="p-[10px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};
