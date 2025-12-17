export interface IEditUserFormData {
  name: string;
  surname: string;
  patronymic?: string;
  login: string;
  roleId: string;
}

export interface IAddUserFormData {
  name: string;
  surname: string;
  patronymic?: string;
  login: string;
  roleId: string;
  password: string;
}
