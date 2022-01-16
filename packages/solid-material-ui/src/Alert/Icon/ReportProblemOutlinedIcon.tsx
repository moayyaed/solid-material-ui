﻿import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../../SvgIcon/SvgIcon";

export function ReportProblemOutlinedIcon(props: Partial<ISvgIconProps>): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />{" "}
      </g>
    </SvgIcon>
  );
}