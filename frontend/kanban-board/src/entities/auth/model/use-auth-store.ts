import { create } from "zustand/react";
import type { IUser, IUserStore } from "@entities/auth/model/types.ts";

export const useAuthStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user: IUser | null) =>
    set({
      user,
    }),
}));
