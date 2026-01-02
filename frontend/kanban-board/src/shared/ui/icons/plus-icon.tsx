import type { FC } from "react";
import type { IIconProps } from "@shared/ui/icons/types.ts";

export const PlusIcon: FC<IIconProps> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g>
        <g>
          <path
            d="M12.0028 7.21899V16.7815"
            stroke="#4318FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0654 12.0002H6.94037"
            stroke="#4318FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <rect width="24.0057" height="24.0057" fill="white" />
        <rect
          width="18"
          height="17"
          fill="white"
          transform="translate(3.00281 3.5)"
        />
      </defs>
    </svg>
  );
};
