import { JSX } from "solid-js";
import { ISvgIconProps, SvgIcon } from "../../../SvgIcon/SvgIcon";

export function RadioButtonUncheckedIcon(
  props: Partial<ISvgIconProps>
): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      </g>
    </SvgIcon>
  );
}
