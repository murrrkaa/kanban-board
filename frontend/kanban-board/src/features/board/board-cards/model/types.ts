import type { TaskColumnName } from "@shared/model/task-column.ts";

export interface IBoardColumn {
  id: string;
  name: string;
  order: number;
  status: keyof typeof TaskColumnName;
}

export interface IBoard {
  id: string;
  name: string;
  projectId: string;
  projectName: string;
  description: string;
  createdAt: string;
  projectDescription: string;
  columns?: IBoardColumn[];
}
