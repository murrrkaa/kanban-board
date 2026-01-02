export interface IAddTaskForm {
  name: string;
  description: string;
  performerId: string;
  priority: string | number;
  boardColumnId: string;
}

export interface IUpdateTask extends IAddTaskForm {
  id: string;
}
