import { create } from "zustand/react";
import type { IUser } from "@entities/auth/model/types.ts";

interface IUserDialogStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  openEditDialog: boolean;
  setOpenEditDialog: (open: boolean) => void;
  openAddDialog: boolean;
  setOpenAddDialog: (open: boolean) => void;
}

export const useUserDialogStore = create<IUserDialogStore>((set) => ({
  user: null,
  setUser: (user: IUser | null) => set({ user }),
  openEditDialog: false,
  setOpenEditDialog: (open: boolean) => set({ openEditDialog: open }),
  openAddDialog: false,
  setOpenAddDialog: (open: boolean) => set({ openAddDialog: open }),
}));
