export interface IEditUserFormData {
  name: string;
  surname: string;
  patronymic?: string;
  login: string;
  role: string;
}

export interface IAddUserFormData {
  name: string;
  surname: string;
  patronymic?: string;
  login: string;
  role: string;
  password: string;
}
