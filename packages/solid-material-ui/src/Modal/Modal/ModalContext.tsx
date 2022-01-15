import { JSX, createContext } from "solid-js";
import { IComponentContext } from "../../Core";

export interface IModalContext extends IComponentContext {
    open: boolean | undefined;
    backdropInvisible: boolean | undefined;
    backdropClass: string | undefined;
    backdropStyle: JSX.CSSProperties;
    onEnter: (ref: HTMLElement | undefined, appearing: boolean) => void;
    onExited: (ref: HTMLElement | undefined) => void;
    onBackdropClick: (event: Event) => void;
}

export const ModalContext = createContext<Partial<IModalContext>>({});
