import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../SvgIcon/SvgIcon";

export function MenuIcon(props: Partial<ISvgIconProps>): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </g>
    </SvgIcon>
  );
}
