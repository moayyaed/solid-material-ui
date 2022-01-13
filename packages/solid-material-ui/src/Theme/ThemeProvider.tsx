import { JSX, Show } from "solid-js";
import {
  ThemeCommonStyle,
  ThemeLightStyle,
  ThemeDarkStyle,
} from "./ThemeStyle";

export type ITheme = "dark" | "light";

export interface IThemeProviderProps {
  theme?: ITheme;
  children: JSX.Element;
}

export function ThemeProvider(props: IThemeProviderProps) {
  const theme = () => props.theme ?? "light";
  return (
    <>
      <ThemeCommonStyle />
      <Show when={theme() === "dark"}>
        <ThemeDarkStyle />
      </Show>
      <Show when={theme() === "light"}>
        <ThemeLightStyle />
      </Show>
      {props.children}
    </>
  );
}
