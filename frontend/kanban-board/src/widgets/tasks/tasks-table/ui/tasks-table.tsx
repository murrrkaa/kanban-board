import { TableWrapper } from "@shared/ui/components/table/table-wrapper/table-wrapper.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@shared/ui/components/table";
import {
  type Cell,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "@widgets/tasks/tasks-table/model/columns.tsx";
import { useEffect } from "react";
import { useGetTasks } from "@entities/board/board-column/model/use-get-tasks.tsx";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";
import type { ITask } from "@entities/task/model/types.ts";
import { cn } from "@shared/lib/cn.ts";

export const TasksTable = () => {
  const { data, isSuccess } = useGetTasks();
  const tasks = useTaskStore((state) => state.tasks);
  const table = useReactTable({
    data: tasks ?? [],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  useEffect(() => {
    if (data && isSuccess) {
      useTaskStore.getState().setTasks(data);
    }
  }, [data, isSuccess]);

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            {table.getHeaderGroups()[0].headers.map((header) => (
              <TableHeaderCell
                key={header.id}
                className={cn(
                  "pl-[10px]",
                  (header.column.columnDef.meta as any)?.className,
                )}
              >
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
              {row.getVisibleCells().map((cell: Cell<ITask, any>) => (
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
