import { create } from "zustand/react";
import { persist } from "zustand/middleware";
import type { IBoard } from "@features/board/board-cards/model/types.ts";

interface IBoardStore {
  board: IBoard | null;
  setBoard: (board: IBoard | null) => void;
  editBoardModal: boolean;
  setEditBoardModal: (editModal: boolean) => void;
  addBoardModal: boolean;
  setAddBoardModal: (addModal: boolean) => void;
  addTaskModal: boolean;
  setAddTaskModal: (addTaskModal: boolean) => void;
  editTaskModal: boolean;
  setEditTaskModal: (addTaskModal: boolean) => void;
  selectedColumnId: string | null;
  setSelectedColumnId: (id: string | null) => void;
}

export const useBoardStore = create<IBoardStore>()(
  persist(
    (set) => ({
      board: null,
      setBoard: (board: IBoard | null) => set({ board }),
      editBoardModal: false,
      setEditBoardModal: (editModal: boolean) =>
        set({ editBoardModal: editModal }),
      addBoardModal: false,
      setAddBoardModal: (addModal: boolean) => set({ addBoardModal: addModal }),
      addTaskModal: false,
      setAddTaskModal: (addTaskModal: boolean) => {
        if (!addTaskModal) {
          set({ addTaskModal, selectedColumnId: null });
        } else {
          set({ addTaskModal });
        }
      },
      editTaskModal: false,
      setEditTaskModal: (editTaskModal: boolean) => set({ editTaskModal }),
      selectedColumnId: null,
      setSelectedColumnId: (id: string | null) => set({ selectedColumnId: id }),
    }),
    { name: "board" },
  ),
);
