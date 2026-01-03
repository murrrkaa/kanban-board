import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@shared/ui/components/sheet/sheet.tsx";
import { useShallow } from "zustand/react/shallow";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";
import { CommentsList } from "@features/task/comment-task/ui/comments-list.tsx";
import { CommentsForm } from "@features/task/comment-task/ui/comments-form.tsx";

export const CommentTaskDialog = () => {
  const { openAddDialog, setOpenAddDialog } = useTaskStore(
    useShallow((state) => ({
      openAddDialog: state.commentTaskModal,
      setOpenAddDialog: state.setCommentTaskModal,
    })),
  );
  return (
    <Sheet open={openAddDialog} onOpenChange={setOpenAddDialog}>
      <SheetTitle></SheetTitle>
      <SheetContent className="bg-white">
        <SheetHeader>Комментарии</SheetHeader>
        <div className="h-full">
          <CommentsList />
          <CommentsForm />
        </div>
      </SheetContent>
    </Sheet>
  );
};
