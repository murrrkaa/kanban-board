import { type ChangeEvent, type FC, useState } from "react";
import { Input } from "@shared/ui/components/input";
import { cn } from "@shared/lib/cn.ts";

export interface IAttribute {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  error?: string;
  isEditable?: boolean;
}

export const EditAttribute: FC<IAttribute> = ({
  label,
  value,
  onChange,
  error,
  onBlur,
  isEditable = true,
}) => {
  const [editable, setEditable] = useState(false);

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const onBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    onBlur?.(event.target.value);
    setEditable(false);
  };
  return (
    <>
      <div className="w-full flex flex-row justify-start items-center gap-[32px] h-[35px]">
        <div className="w-[186px] text-blue-500 font-medium text-[12px]/[14px]">
          {label}
        </div>
        <div
          className={cn(
            "basis-1/2 w-full",
            editable && "border border-blue-400",
          )}
          onClick={() => setEditable(!editable)}
        >
          <Input
            disabled={!isEditable}
            placeholder=""
            inputSize="small"
            value={value}
            classNames={{
              inputClassName: "rounded-none border-none",
            }}
            onChange={onChangeValue}
            onBlur={onBlurHandler}
          />
        </div>
      </div>
      {error && (
        <div className="text-[12px]/[16px] text-red ml-[218px]">{error}</div>
      )}
    </>
  );
};
