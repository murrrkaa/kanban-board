import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { TasksTable } from "@widgets/tasks/tasks-table/ui";
import { EditTaskModal } from "@features/task/edit-task/ui/edit-task-modal.tsx";

export const TasksPage = () => {
  return (
    <>
      <PageWrapper title="Tasks">
        <TasksTable />
      </PageWrapper>
      <EditTaskModal />
    </>
  );
};
