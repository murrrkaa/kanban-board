export interface SignInFormData {
  login: string;
  password: string;
}

export interface IResponseLogin {
  message: string;
  token: string;
}
