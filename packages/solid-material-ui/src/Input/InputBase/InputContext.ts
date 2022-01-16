import { createContext } from "solid-js";
import { IFormControlContext } from "../../Form";

export interface IInputContext extends IFormControlContext {
  inputRef: ((ref: HTMLInputElement | undefined) => void) | undefined;
  id: string | undefined;
  type: string | undefined;
  name: string | undefined;
  value: string | undefined;
  placeholder: string | undefined;
  autoFocus: boolean | undefined;
  autoComplete: string | undefined;
  autoCorrect: string | undefined;
  autoCapitalize: string | undefined;
  readOnly: boolean | undefined;
  rows: number | undefined;
  maxLength: number | undefined;
  onChange: ((value: string | undefined) => void) | undefined;
}

export const InputContext = createContext<Partial<IInputContext>>({});
