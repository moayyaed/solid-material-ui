import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../../../SvgIcon/SvgIcon";

export function CheckBoxOutlineBlankIcon(
  props: Partial<ISvgIconProps>
): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      </g>
    </SvgIcon>
  );
}
