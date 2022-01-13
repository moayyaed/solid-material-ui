import { createContext } from "solid-js";
import { ITheme } from "solid-material-ui";

export interface IThemeContext {
    readonly theme: ITheme;
    toggle(): void;
}

export const ThemeContext = createContext<IThemeContext | undefined>();
