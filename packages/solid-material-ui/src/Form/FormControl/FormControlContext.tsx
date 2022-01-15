import { createContext } from "solid-js";
import { IComponentContext } from "../../Core";
import { Margin, ControlVariant } from "../../Core";

export interface IFormControlContext extends IComponentContext {
  filled: boolean | undefined;
  focused: boolean | undefined;
  required: boolean | undefined;
  error: boolean | undefined;
  hiddenLabel: boolean | undefined;
  hasStartAdornment: boolean | undefined;
  hasEndAdornment: boolean | undefined;
  margin: Margin | undefined;
  variant: ControlVariant | undefined;
  onFocus: ((event: FocusEvent) => void) | undefined;
  onBlur: ((event: FocusEvent) => void) | undefined;
  onFill: (() => void) | undefined;
  onEmpty: (() => void) | undefined;
}

export const FormControlContext = createContext<Partial<IFormControlContext>>({});
