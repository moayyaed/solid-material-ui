import { createContext } from "solid-js";
import { IComponentContext } from "../Core";

export interface ISvgIconContext extends IComponentContext {
}

export const SvgIconContext = createContext<Partial<ISvgIconContext>>({});
