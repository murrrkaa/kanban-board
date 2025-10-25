import { RoutesEnum } from "@shared/routes";
import type { FC } from "react";
import type { IIconProps } from "@shared/ui/icons/types.ts";
import { DashboardsIcon } from "@shared/ui/icons/dashboards-icon.tsx";
import { ProjectsIcon } from "@shared/ui/icons/projects-icon.tsx";
import { UsersIcon } from "@shared/ui/icons/users-icon.tsx";
import { SignOutIcon } from "@shared/ui/icons/sign-out-icon.tsx";
import { ProfileIcon } from "@shared/ui/icons/profile-icon.tsx";
import { TasksIcon } from "@shared/ui/icons/tasks-icon.tsx";

export interface IRoute {
  route: string;
  icon: FC<IIconProps>;
  name: string;
}

export const links: IRoute[] = [
  { name: "Dashboards", route: RoutesEnum.DASHBOARDS, icon: DashboardsIcon },
  { name: "Projects", route: RoutesEnum.PROJECTS, icon: ProjectsIcon },
  { name: "Tasks", route: RoutesEnum.TASKS, icon: TasksIcon },
  { name: "Users", route: RoutesEnum.USERS, icon: UsersIcon },
  { name: "Profile", route: RoutesEnum.PROFILE, icon: ProfileIcon },
  { name: "Sign Out", route: RoutesEnum.LOGIN, icon: SignOutIcon },
];
