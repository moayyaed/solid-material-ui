import { createContext } from "solid-js";
import { IComponentContext } from "../../Core";
import { Portion } from "../../Core";

export interface ITableContentContext extends IComponentContext {
  portion: Portion;
}

export const TableContentContext = createContext<Partial<ITableContentContext>>({});
