import { NavLink, useLocation } from "react-router-dom";
import type { FC } from "react";
import type { IRoute } from "@widgets/navbar/model/links.ts";
import { cn } from "@shared/lib/cn.ts";

interface ILinkProps extends IRoute {
  isActive?: boolean;
  onClick?: (route: string) => void;
}

export const NavlinkItem: FC<ILinkProps> = ({ route, name, icon, onClick }) => {
  const LinkIcon = icon;
  const isActiveLink = useLocation().pathname === route;
  return (
    <NavLink
      to={route}
      className={cn(
        "group flex flex-row gap-[8px] text-[16px] font-bold items-center text-gray-50 hover:text-blue-500",
        isActiveLink && "text-blue-500",
      )}
      onClick={() => onClick?.(route)}
    >
      <LinkIcon
        className={cn(
          "group-hover:text-blue-100",
          isActiveLink && "text-blue-100",
        )}
      />
      {name}
    </NavLink>
  );
};
