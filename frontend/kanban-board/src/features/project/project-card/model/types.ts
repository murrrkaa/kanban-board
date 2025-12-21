export interface IProjectDto {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  performer: {
    id: string;
    name: string;
    surname: string;
    patronymic?: string;
  };
}
