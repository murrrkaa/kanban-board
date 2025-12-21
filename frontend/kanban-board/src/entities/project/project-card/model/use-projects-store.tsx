import { create } from "zustand/react";
import type { IProjectDto } from "@features/project/project-card/model/types.ts";

interface IProjectsStore {
  project: IProjectDto | null;
  setProject: (project: IProjectDto | null) => void;
  editProjectModal: boolean;
  setEditProjectModal: (editModal: boolean) => void;
  addProjectModal: boolean;
  setAddProjectModal: (addModal: boolean) => void;
}

export const useProjectsStore = create<IProjectsStore>((set) => ({
  project: null,
  setProject: (project: IProjectDto | null) => set({ project }),
  editProjectModal: false,
  setEditProjectModal: (editModal: boolean) =>
    set({ editProjectModal: editModal }),
  addProjectModal: false,
  setAddProjectModal: (addModal: boolean) => set({ addProjectModal: addModal }),
}));
