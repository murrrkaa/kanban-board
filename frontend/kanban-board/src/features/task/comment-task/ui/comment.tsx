import type { IComment } from "@entities/task/model/types.ts";
import type { FC } from "react";

interface IProp {
  comment: IComment;
}

export const Comment: FC<IProp> = ({ comment }) => {
  const authorName = `${comment.authorName} ${comment.authorSurname} ${comment.authorPatronymic ?? ""}`;
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px]/[14px] text-gray-500 font-normal truncate">
        {authorName}
      </span>
      <p className="text-[14px]/[16px] break-words">{comment.content}</p>
      <span className="text-[12px]/[14px] text-gray-500 font-normal">
        {new Date(comment?.createdAt ?? "").toLocaleDateString()}
      </span>
    </div>
  );
};
