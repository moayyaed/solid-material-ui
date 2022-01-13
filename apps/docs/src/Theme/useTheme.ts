import { useContext } from "solid-js";
import { IThemeContext, ThemeContext } from "./ThemeContext";

export function useTheme(): IThemeContext | undefined {
    return useContext(ThemeContext);
}