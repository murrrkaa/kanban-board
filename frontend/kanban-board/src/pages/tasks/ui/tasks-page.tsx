import { PageWrapper } from "@shared/ui/components/page-wrapper";
import { TasksTable } from "@widgets/tasks/tasks-table/ui";
import { EditTaskModal } from "@features/task/edit-task/ui/edit-task-modal.tsx";
import { CommentTaskDialog } from "@features/task/comment-task/ui";

export const TasksPage = () => {
  return (
    <>
      <PageWrapper title="Tasks">
        <TasksTable />
      </PageWrapper>
      <EditTaskModal />
      <CommentTaskDialog />
    </>
  );
};
