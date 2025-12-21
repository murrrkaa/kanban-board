export interface IAddProjectDto {
  name: string;
  description: string;
  id_created_by: string;
}

export interface IAddProjectForm {
  name: string;
  description: string;
  createdBy?: string;
}
