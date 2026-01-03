import { Comment } from "@features/task/comment-task/ui/comment.tsx";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";

export const CommentsList = () => {
  const task = useTaskStore((state) => state.selectedTask);

  return (
    <div className="h-[calc(100%-120px)] scrollbar overflow-y-auto mb-[20px] pr-[8px] flex flex-col gap-4 mt-[30px]">
      {task?.comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
