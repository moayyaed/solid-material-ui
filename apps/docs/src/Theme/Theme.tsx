import { createSignal, JSX, PropsWithChildren } from "solid-js";
import { ITheme } from "solid-material-ui";
import { ThemeConsumer } from "./ThemeConsumer";
import { IThemeContext, ThemeContext } from "./ThemeContext";

export function Theme(props: PropsWithChildren): JSX.Element {
  const storedTheme = "app-theme";
  const [theme, setTheme] = createSignal<ITheme>(
    (localStorage.getItem(storedTheme) as ITheme) ?? "light"
  );
  const themeContext: IThemeContext = {
    get theme() {
      return theme();
    },
    toggle(): void {
      const newTheme = theme() === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem(storedTheme, newTheme);
    },
  };
  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeConsumer>{props.children}</ThemeConsumer>
    </ThemeContext.Provider>
  );
}
