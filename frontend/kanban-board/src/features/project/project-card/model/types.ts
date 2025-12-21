export interface IProjectDto {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  performer: {
    name: string;
    surname: string;
    patronymic?: string;
  };
}
