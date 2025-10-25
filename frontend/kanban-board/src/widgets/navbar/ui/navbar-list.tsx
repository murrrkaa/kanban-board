import { links } from "@widgets/navbar/model/links.ts";
import { NavlinkItem } from "@widgets/navbar/ui/navlink-item.tsx";
import { RoutesEnum } from "@shared/routes";
import { signOut } from "@shared/lib/auth.ts";

export const NavbarList = () => {
  const handleClick = (route: string) => {
    if (route === RoutesEnum.LOGIN) signOut();
  };
  return (
    <ul className="flex flex-col gap-[24px]">
      {links.map((link, index) => (
        <NavlinkItem {...link} key={index} onClick={handleClick} />
      ))}
    </ul>
  );
};
