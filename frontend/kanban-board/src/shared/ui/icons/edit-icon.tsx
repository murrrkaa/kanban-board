import type { FC } from "react";
import type { IIconProps } from "@shared/ui/icons/types.ts";

export const EditIcon: FC<IIconProps> = (props) => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
      <g>
        <path
          d="M2.125 12.3675V14.5208C2.125 14.7192 2.28083 14.875 2.47917 14.875H4.6325C4.72458 14.875 4.81667 14.8396 4.88042 14.7688L12.6154 7.04083L9.95917 4.38458L2.23125 12.1125C2.16042 12.1833 2.125 12.2683 2.125 12.3675ZM14.6696 4.98667C14.9458 4.71042 14.9458 4.26417 14.6696 3.98792L13.0121 2.33042C12.7358 2.05417 12.2896 2.05417 12.0133 2.33042L10.7171 3.62667L13.3733 6.28292L14.6696 4.98667Z"
          fill="#A3AED0"
        />
      </g>
      <defs>
        <rect width="17" height="17" fill="white" />
      </defs>
    </svg>
  );
};
