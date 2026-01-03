import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { SendIcon } from "lucide-react";

export const CommentsForm = () => {
  return (
    <div className="flex flex-row gap-2 items-center justify-between">
      <div className="flex-1">
        <Input placeholder="Отправить комментарий" />
      </div>
      <Button variant="outline" className="w-[45px] h-[45px] p-0">
        <SendIcon size={16} />
      </Button>
    </div>
  );
};
