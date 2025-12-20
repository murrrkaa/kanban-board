import { Separator } from "@shared/ui/components/separator";
import { NavbarList } from "@widgets/navbar/ui/navbar-list.tsx";

export const Navbar = () => {
  return (
    <div className="min-w-[170px] w-[170px] bg-white h-[100vh] min-h-full flex flex-col items-center">
      <div className="flex flex-col items-center py-[56px] uppercase text-[26px] text-blue-500">
        <span className="font-bold">Kanban</span>
        <span> Board</span>
      </div>
      <Separator className="mb-[40px]" />
      <NavbarList />
    </div>
  );
};
