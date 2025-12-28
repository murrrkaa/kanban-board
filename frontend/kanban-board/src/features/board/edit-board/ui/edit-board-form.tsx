import { Controller, useForm } from "react-hook-form";
import { Input } from "@shared/ui/components/input";
import { Button } from "@shared/ui/components/button";
import { useShallow } from "zustand/react/shallow";
import { useQueryClient } from "@tanstack/react-query";
import { RoutesEnum } from "@shared/routes";
import { useBoardStore } from "@entities/board/board-card/model/use-board-store.tsx";
import type { IBoard } from "@features/board/board-cards/model/types.ts";
import { useUpdateBoard } from "@features/board/edit-board/model/use-update-board.tsx";

export const EditBoardForm = () => {
  const { mutateAsync: updateBoard } = useUpdateBoard();
  const query = useQueryClient();
  const { setOpenDialog, board } = useBoardStore(
    useShallow((state) => ({
      setOpenDialog: state.setEditBoardModal,
      board: state.board,
    })),
  );

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<IBoard>({
    defaultValues: {
      id: board?.id,
      name: board?.name ?? "",
      description: board?.description ?? "",
      createdAt: new Date(board?.createdAt ?? "").toLocaleDateString(),
      projectName: board?.projectName ?? "",
      projectDescription: board?.projectDescription ?? "",
    },
  });

  const onSubmit = async (data: IBoard) => {
    await updateBoard({
      ...data,
      name: data?.name || board!.name,
    });

    query.invalidateQueries({
      queryKey: [RoutesEnum.DASHBOARDS],
    });
    setOpenDialog(false);
  };
  return (
    <div className="h-full">
      <div className="h-[calc(100%-100px)] flex flex-col gap-4 mt-[30px]">
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Наименование доски"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"name"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Описание доски"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"description"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              disabled
              placeholder="Дата создания "
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"createdAt"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              disabled
              placeholder="Имя проекта"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"projectName"}
        />
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              disabled
              placeholder="Описание проекта"
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          )}
          name={"projectDescription"}
        />
      </div>
      <Button
        className="w-full bg-blue-200 py-[10px] mt-auto"
        onClick={handleSubmit(onSubmit)}
        disabled={!isDirty}
      >
        Сохранить изменения
      </Button>
    </div>
  );
};
