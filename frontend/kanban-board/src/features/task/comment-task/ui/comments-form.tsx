import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import { useCreateComment } from "@features/task/comment-task/model/use-create-comment.tsx";
import type { IComment, ITask } from "@entities/task/model/types.ts";
import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";
import { useTaskStore } from "@entities/task/model/useTaskStore.tsx";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { useShallow } from "zustand/react/shallow";

export const CommentsForm = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createComment } = useCreateComment();
  const user = useAuthStore.getState().user;

  const { selectedTask, setSelectedTask } = useTaskStore(
    useShallow((state) => ({
      selectedTask: state.selectedTask,
      setSelectedTask: state.setSelectedTask,
    })),
  );

  const [value, setValue] = useState("");

  const handleSendComment = async () => {
    const form: IComment = {
      authorId: user?.id ?? "",
      content: value,
      taskId: selectedTask?.id,
    };
    const createdComment = await createComment(form);
    setValue("");

    setSelectedTask({
      ...selectedTask,
      comments: [...(selectedTask?.comments ?? []), createdComment],
    } as ITask);

    queryClient.refetchQueries({
      queryKey: [RoutesEnum.TASKS],
    });
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-between">
      <div className="flex-1">
        <Input
          placeholder="Отправить комментарий"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Button
        variant="outline"
        className="w-[45px] h-[45px] p-0"
        onClick={handleSendComment}
        disabled={!value.trim()}
      >
        <SendIcon size={16} />
      </Button>
    </div>
  );
};
