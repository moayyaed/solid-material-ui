import { createContext } from "solid-js";
import { IComponentContext } from "../..";

export interface IListContext extends IComponentContext {
    dense: boolean;
}

export const ListContext = createContext<Partial<IListContext>>({});