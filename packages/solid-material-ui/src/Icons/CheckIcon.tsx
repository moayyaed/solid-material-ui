import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../SvgIcon/SvgIcon";

export function CheckIcon(props: Partial<ISvgIconProps>): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </g>
    </SvgIcon>
  );
}
