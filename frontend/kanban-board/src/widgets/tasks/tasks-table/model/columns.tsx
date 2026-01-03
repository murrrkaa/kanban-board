import type { ColumnDef } from "@tanstack/react-table";
import type { ITask } from "@entities/task/model/types.ts";
import { EditTaskMenu } from "@features/task/edit-task/ui/edit-task-menu.tsx";
import { StatusTag } from "@shared/ui/components/status-tag/ui";
import { TaskColumnName } from "@shared/model/task-column.ts";

export const columns: ColumnDef<ITask>[] = [
  {
    accessorKey: "name",
    header: "Наименование задачи",
    meta: {
      className: "w-[200px]",
    },
  },
  {
    accessorKey: "projectName",
    header: "Проект",
  },
  {
    accessorKey: "boardName",
    header: "Доска",
  },
  {
    accessorKey: "description",
    header: "Описание",
  },
  {
    accessorKey: "boardColumnName",
    header: "Статус",
    cell: ({ row }) => {
      const status = row.original
        .boardColumnName as keyof typeof TaskColumnName;
      return status && <span>{TaskColumnName[status]}</span>;
    },
    meta: {
      className: "w-[100px]",
    },
  },
  {
    accessorKey: "performerId",
    header: "Исполнитель",
    cell: ({ row }) => {
      const task = row.original;
      const fullName = `${task.performerName} ${task.performerSurname} ${task.performerPatronymic ?? ""}`;
      return <span>{fullName}</span>;
    },
  },
  {
    accessorKey: "priority",
    header: "Приоритет",
    cell: ({ row }) => {
      const task = row.original;
      return <StatusTag priority={task.priority} />;
    },
    meta: {
      className: "w-[100px]",
    },
  },
  {
    accessorKey: "createdAt",
    header: "Дата создания",
    cell: ({ row }) => {
      const task = row.original;
      return new Date(task.createdAt).toLocaleDateString();
    },
    meta: {
      className: "w-[120px]",
    },
  },
  {
    header: " ",
    cell: ({ row }) => {
      const task = row.original;
      return <EditTaskMenu task={task} />;
    },
    meta: {
      className: "w-[100px]",
    },
  },
];
