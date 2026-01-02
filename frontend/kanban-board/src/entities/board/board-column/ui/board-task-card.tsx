import { Title } from "@shared/ui/components/title";
import {
  TaskPriorityEnum,
  TaskPriorityMeta,
} from "@shared/model/task-priority.ts";
import type { ITask } from "@entities/task/model/types.ts";
import type { FC } from "react";
import { EditTaskMenu } from "@features/task/edit-task/ui/edit-task-menu.tsx";

interface IProp {
  task: ITask;
}

export const BoardTaskCard: FC<IProp> = ({ task }) => {
  const performerName = `${task?.performerName} ${task?.performerSurname} ${task?.performerPatronymic ?? ""}`;
  return (
    <div className="w-full min-w-0 shadow h-fit bg-white rounded-[16px] p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center gap-4">
        <Title size="xs" className="truncate">
          {task.name}
        </Title>
        <EditTaskMenu task={task} />
      </div>
      {task.description && (
        <p className="line-clamp-3 truncate text-[16px]/[20px] text-gray-50">
          {task.description}
        </p>
      )}
      {task.performerId && (
        <div>
          <div className="text-[14px]/[16px] text-blue-500 font-medium">
            Исполнитель
          </div>
          <span className="text-[16px]/[20px] text-gray-50 line-clamp-2 truncate">
            {performerName}
          </span>
        </div>
      )}

      <div
        className="text-[12px]/[14px] text-white font-light w-fit px-[15px] py-[5px] rounded-[12px] ml-auto"
        style={{
          backgroundColor:
            TaskPriorityMeta[task.priority as TaskPriorityEnum].color,
        }}
      >
        {TaskPriorityMeta[task.priority as TaskPriorityEnum].label}
      </div>
    </div>
  );
};
