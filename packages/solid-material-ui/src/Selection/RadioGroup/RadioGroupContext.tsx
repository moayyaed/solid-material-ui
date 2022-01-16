import { createContext } from "solid-js";
import { IComponentContext } from "../../Core";

export interface IRadioGroupContext extends IComponentContext {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export const RadioGroupContext = createContext<Partial<IRadioGroupContext>>({});
