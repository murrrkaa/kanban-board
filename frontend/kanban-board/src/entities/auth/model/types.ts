import type { JwtPayload } from "jwt-decode";

export interface IUserDto {
  id_role: string;
  id_user: string;
  name: string;
  surname: string;
  patronymic: string;
  login: string;
}

export interface IUser {
  id: string;
  name: string;
  surname?: string;
  patronymic?: string;
  login: string;
  roleId: string;
}

export interface IUserStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export interface IPayload extends JwtPayload {
  id: string;
  login: string;
  role: string;
}
