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
    }),
    { name: "board" },
  ),
);
