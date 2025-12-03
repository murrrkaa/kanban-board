import { create } from "zustand/react";
import type { IUsersStore } from "@entities/user/model/types.ts";

export const useUsersStore = create<IUsersStore>((set) => ({
  users: null,
  setUsers: (users) => set({ users }),
}));
