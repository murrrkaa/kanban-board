export const Comment = () => {
  const date = new Date().toLocaleDateString();
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px]/[14px] text-gray-500 font-normal truncate">
        Аннаgggggggggggggggggggggggggggggggggggggggggggggg
      </span>
      <p className="text-[14px]/[16px] break-words">
        Текст
        комментарияgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
      </p>
      <span className="text-[12px]/[14px] text-gray-500 font-normal">{`${date}`}</span>
    </div>
  );
};
