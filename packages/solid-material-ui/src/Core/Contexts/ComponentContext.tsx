import { JSX, createContext } from "solid-js";

export interface IComponentContext {
  class: string | undefined;
  style: JSX.CSSProperties | undefined;
  disabled: boolean | undefined;
  ref: (ref: HTMLElement | undefined) => void;
}

export const ComponentContext = createContext<Partial<IComponentContext>>({});
