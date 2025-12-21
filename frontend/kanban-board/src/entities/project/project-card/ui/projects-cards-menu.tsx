import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/ui/components/dropdown";
import { Button } from "@shared/ui/components/button";
import { MoreIcon } from "@shared/ui/icons/more-icon.tsx";

export const ProjectsCardsMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0">
          <MoreIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem>Редактировать</DropdownMenuItem>
        <DropdownMenuItem>Удалить</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
