import type { IComment, ITask } from "@entities/task/model/types.ts";
import type { FC } from "react";
import { Button } from "@shared/ui/components/combobox/button";
import { TrashIcon } from "lucide-react";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";
import { useDeleteComment } from "@features/task/comment-task/model/use-delete-comment.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";
import { useShallow } from "zustand/react/shallow";

interface IProp {
  comment: IComment;
}

export const Comment: FC<IProp> = ({ comment }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteComment } = useDeleteComment();

  const { selectedTask, setSelectedTask } = useTaskStore(
    useShallow((state) => ({
      selectedTask: state.selectedTask,
      setSelectedTask: state.setSelectedTask,
    })),
  );

  const authorName = `${comment.authorName} ${comment.authorSurname} ${comment.authorPatronymic ?? ""}`;
  const userId = useAuthStore.getState().user?.id ?? "";

  const handleRemoveComment = async () => {
    if (comment.id) {
      await deleteComment(comment.id);

      const updatedComments =
        selectedTask?.comments?.filter((c) => c.id !== comment.id) ?? [];

      setSelectedTask({
        ...selectedTask,
        comments: [...updatedComments],
      } as ITask);

      queryClient.invalidateQueries({
        queryKey: [RoutesEnum.TASKS],
      });
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px]/[14px] text-gray-500 font-normal truncate">
        {authorName}
      </span>
      <p className="text-[14px]/[16px] break-words">{comment.content}</p>
      <div className="flex flex-row justify-between items-center">
        <span className="text-[12px]/[14px] text-gray-500 font-normal">
          {new Date(comment?.createdAt ?? "").toLocaleDateString()}
        </span>
        {userId === comment.authorId && (
          <Button
            variant="ghost"
            className="w-[24px] h-[24px] p-0"
            onClick={handleRemoveComment}
          >
            <TrashIcon size={16} className={"text-blue-500"} />
          </Button>
        )}
      </div>
    </div>
  );
};
