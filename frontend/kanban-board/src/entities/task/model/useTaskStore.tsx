import { create } from "zustand/react";
import type { ITask } from "@entities/task/model/types.ts";

interface ITaskStore {
  task: ITask | null;
  setTask: (task: ITask | null) => void;
  editTaskModal: boolean;
  setEditTaskModal: (addTaskModal: boolean) => void;
}

export const useTaskStore = create<ITaskStore>((set) => ({
  task: null,
  setTask: (task: ITask | null) => set({ task }),
  editTaskModal: false,
  setEditTaskModal: (editTaskModal: boolean) => set({ editTaskModal }),
}));
