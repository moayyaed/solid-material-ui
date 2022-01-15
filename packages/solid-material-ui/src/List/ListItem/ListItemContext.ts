import { createContext, JSX } from "solid-js";
import { AlignItems } from "../../Core/AlignItems";

export interface IListItemContext {
    disabled: boolean;
    class: string | undefined;
    style: JSX.CSSProperties | undefined;
    dense: boolean;
    button: boolean;
    alignItems: AlignItems;
    focusVisibleClass: string | undefined;
    onClick: (event: any) => void;
}

export const ListItemContext = createContext<IListItemContext | null>(null);