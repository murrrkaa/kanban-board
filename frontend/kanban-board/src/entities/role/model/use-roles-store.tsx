import { create } from "zustand/react";
import type { IRole } from "@entities/role/model/types.ts";
import { getRoles } from "@entities/role/model/get-roles.ts";

interface IRolesStore {
  roles: IRole[];
  getRoles: () => void;
}

export const useRolesStore = create<IRolesStore>((set) => ({
  roles: [],
  getRoles: async () => {
    const roles =
      (await getRoles()
        .then((data) =>
          data.map((role) => ({
            id: role?.id_role,
            name: role?.name,
          })),
        )
        .catch((err) => console.log(err))) ?? [];
    set({
      roles,
    });
  },
}));
