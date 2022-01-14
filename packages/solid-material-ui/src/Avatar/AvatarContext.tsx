import { createContext } from "solid-js";
import { IComponentContext } from "../Core";

export interface IAvatarContext extends IComponentContext {
}

export const AvatarContext = createContext<Partial<IAvatarContext>>({});
