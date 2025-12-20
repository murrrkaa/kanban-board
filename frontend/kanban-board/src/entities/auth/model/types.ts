import type { JwtPayload } from "jwt-decode";

export interface IUserDto {
  id_role: string;
  id_user?: string;
  name: string;
  surname: string;
  patronymic: string | null;
  login: string;
  role_name?: string;
  password?: string;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  patronymic?: string;
  login: string;
  roleId: string;
  roleName?: string;
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
