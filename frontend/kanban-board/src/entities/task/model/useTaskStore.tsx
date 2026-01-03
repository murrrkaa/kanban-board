import { create } from "zustand/react";
import type { ITask } from "@entities/task/model/types.ts";

interface ITaskStore {
  tasks: ITask[] | null;
  setTasks: (tasks: ITask[] | null) => void;
  selectedTask: ITask | null;
  setSelectedTask: (task: ITask | null) => void;
  editTaskModal: boolean;
  setEditTaskModal: (addTaskModal: boolean) => void;
  commentTaskModal: boolean;
  setCommentTaskModal: (addTaskModal: boolean) => void;
}

export const useTaskStore = create<ITaskStore>((set) => ({
  tasks: null,
  setTasks: (tasks: ITask[] | null) => set({ tasks }),
  selectedTask: null,
  setSelectedTask: (selectedTask: ITask | null) => set({ selectedTask }),
  editTaskModal: false,
  setEditTaskModal: (editTaskModal: boolean) => set({ editTaskModal }),
  commentTaskModal: false,
  setCommentTaskModal: (commentTaskModal: boolean) => set({ commentTaskModal }),
}));
