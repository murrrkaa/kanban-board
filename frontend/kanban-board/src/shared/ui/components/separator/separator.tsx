import { cn } from "@shared/lib/cn.ts";
import type { FC } from "react";

interface ISeparatorProp {
  className?: string;
}

export const Separator: FC<ISeparatorProp> = ({ className }) => {
  return <hr className={cn("h-[1px] w-full text-white-100", className)} />;
};
