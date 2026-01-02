import { Title } from "@shared/ui/components/title";
import { Button } from "@shared/ui/components/button";
import { EditIcon } from "@shared/ui/icons/edit-icon.tsx";
import { TaskPriorityMeta } from "@shared/model/task-priority.ts";

export const BoardTaskCard = () => {
  return (
    <div className="w-full min-w-0 shadow h-fit bg-white rounded-[16px] p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center gap-4">
        <Title size="xs" className="truncate">
          Наименование задачи
        </Title>
        <Button variant="ghost" className="w-[24px] h-[24px] p-0">
          <EditIcon />
        </Button>
      </div>
      <p className="line-clamp-3 truncate text-[16px]/[20px] text-gray-50">
        Описание задачи
      </p>
      <div>
        <div className="text-[14px]/[16px] text-blue-500 font-medium">
          Исполнитель
        </div>
        <span className="text-[16px]/[20px] text-gray-50 line-clamp-2 truncate">
          Анна администратор
        </span>
      </div>
      <div
        className="text-[12px]/[14px] text-white font-light w-fit px-[15px] py-[5px] rounded-[12px] ml-auto"
        style={{
          backgroundColor: TaskPriorityMeta[1].color,
        }}
      >
        {TaskPriorityMeta[1].label}
      </div>
    </div>
  );
};
