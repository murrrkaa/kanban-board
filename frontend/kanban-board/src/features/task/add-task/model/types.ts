export interface IAddTaskForm {
  name: string;
  description: string;
  performerId: string;
  priority: string | number;
  boardColumnId: string;
}
