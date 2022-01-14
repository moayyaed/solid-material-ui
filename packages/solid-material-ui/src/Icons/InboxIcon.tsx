import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../SvgIcon/SvgIcon";

export function InboxIcon(props: Partial<ISvgIconProps>): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
      </g>
    </SvgIcon>
  );
}
