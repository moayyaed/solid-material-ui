import { JSX, PropsWithChildren } from "solid-js";
import { Baseline, ThemeProvider } from "solid-material-ui";
import { useTheme } from "./useTheme";

export function ThemeConsumer(props: PropsWithChildren): JSX.Element {
  const themeContext = useTheme();
  return (
    <ThemeProvider theme={themeContext?.theme}>
      <Baseline />
      {props.children}
    </ThemeProvider>
  );
}
