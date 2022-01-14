import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../SvgIcon/SvgIcon";

export function FolderIcon(props: Partial<ISvgIconProps>): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
      </g>
    </SvgIcon>
  );
}
