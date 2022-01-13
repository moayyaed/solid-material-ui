import { JSX, createContext } from "solid-js";

export interface IComponentContext {
  class: string | undefined;
  style: JSX.CSSProperties | undefined;
  disabled: boolean | undefined;
  ref: ((ref: HTMLElement | undefined) => void) | undefined;
}

export const ComponentContext = createContext<IComponentContext | undefined>();
