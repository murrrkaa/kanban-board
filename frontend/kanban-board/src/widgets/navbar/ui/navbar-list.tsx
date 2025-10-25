import { links } from "@widgets/navbar/model/links.ts";
import { NavlinkItem } from "@widgets/navbar/ui/navlink-item.tsx";

export const NavbarList = () => {
  return (
    <ul className="flex flex-col gap-[24px]">
      {links.map((link, index) => (
        <NavlinkItem {...link} key={index} />
      ))}
    </ul>
  );
};
