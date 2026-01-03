import { Comment } from "@features/task/comment-task/ui/comment.tsx";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";
import { useEffect, useRef } from "react";

export const CommentsList = () => {
  const task = useTaskStore((state) => state.selectedTask);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current)
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
  }, [task?.comments]);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100%-120px)] scrollbar overflow-y-auto mb-[20px] pr-[8px] flex flex-col gap-4 mt-[30px]"
    >
      {task?.comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
