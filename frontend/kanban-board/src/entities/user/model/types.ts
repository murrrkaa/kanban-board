import type { IUser } from "@entities/auth/model/types.ts";

export interface IUsersStore {
  users: IUser[] | null;
  setUsers: (users: IUser[]) => void;
}
