import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../SvgIcon/SvgIcon";

export function AddIcon(props: Partial<ISvgIconProps>): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </g>
    </SvgIcon>
  );
}
