import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../SvgIcon/SvgIcon";

export function SendIcon(props: Partial<ISvgIconProps>): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </g>
    </SvgIcon>
  );
}
