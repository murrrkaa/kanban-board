import type { IOption } from "@shared/ui/components/combobox/combobox.tsx";

export enum TaskPriorityEnum {
  Low = 1,
  Medium = 2,
  Hard = 3,
}

export const TaskPriorityMeta: Record<
  TaskPriorityEnum,
  { label: string; color: string }
> = {
  [TaskPriorityEnum.Low]: { label: "Низкий", color: "green" },
  [TaskPriorityEnum.Medium]: { label: "Средний", color: "orange" },
  [TaskPriorityEnum.Hard]: { label: "Высокий", color: "red" },
};

export const TaskPriorityList: IOption[] = [
  {
    id: "1",
    name: "Низкий",
  },
  {
    id: "2",
    name: "Средний",
  },
  {
    id: "3",
    name: "Высокий",
  },
];
