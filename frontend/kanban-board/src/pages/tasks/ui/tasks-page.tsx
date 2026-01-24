import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { TasksTable } from "@widgets/tasks/tasks-table/ui";
import { EditTaskModal } from "@features/task/edit-task/ui/edit-task-modal.tsx";
import { CommentTaskDialog } from "@features/task/comment-task/ui";
import { Input } from "@shared/ui/components/input";
import { useState } from "react";
import { useDebounce } from "@shared/hooks/use-debounce.tsx";

export const TasksPage = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 400);

  return (
    <>
      <PageWrapper
        title="Tasks"
        leftSlot={
          <Input
            value={value}
            classNames={{
              inputClassName: "w-[250px]",
            }}
            placeholder="Наименование задачи"
            onChange={(e) => setValue(e.target.value)}
          />
        }
      >
        <TasksTable taskName={debounceValue} />
      </PageWrapper>
      <EditTaskModal />
      <CommentTaskDialog />
    </>
  );
};
