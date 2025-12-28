export interface IAddBoardDto {
  name: string;
  description: string;
  id_project?: string | null;
}

export interface IAddBoardForm {
  name: string;
  description: string;
  projectId?: string;
}
