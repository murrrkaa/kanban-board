export interface ITask {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  performerId: string;
  performerName: string;
  performerPatronymic: string;
  performerSurname: string;
  priority: number | string;
  projectId: string;
  boardId: string;
  boardColumnId: string;
  projectName?: string;
  boardName?: string;
  boardColumnName?: string;
}
