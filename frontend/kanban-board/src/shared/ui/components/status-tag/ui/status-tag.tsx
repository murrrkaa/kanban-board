import {
  TaskPriorityEnum,
  TaskPriorityMeta,
} from "@shared/model/task-priority.ts";
import type { FC } from "react";

interface IProp {
  priority: string | number;
}

export const StatusTag: FC<IProp> = ({ priority }) => {
  return (
    <div
      className="text-[12px]/[14px] text-white font-light w-fit px-[15px] py-[5px] rounded-[12px]"
      style={{
        backgroundColor: TaskPriorityMeta[priority as TaskPriorityEnum]?.color,
      }}
    >
      {TaskPriorityMeta[priority as TaskPriorityEnum]?.label}
    </div>
  );
};
