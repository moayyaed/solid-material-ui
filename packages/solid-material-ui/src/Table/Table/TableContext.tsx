import { createContext } from "solid-js";
import { IComponentContext } from "../../Core";
import { Padding } from "../../Core/Padding";
import { Size } from "../../Core/Size";

export interface ITableContext extends IComponentContext {
  padding: Padding;
  size: Size;
  stickyHeader: boolean;
}

export const TableContext = createContext<Partial<ITableContext>>({});
