import { JSX } from "solid-js";
import { useTheme } from "../Theme";

export function ThemeToggler(): JSX.Element {
  const themeContext = useTheme();
  return (
    <>
      <div>Current theme is {themeContext?.theme}</div>
      <button onclick={themeContext?.toggle}>Toggle Theme</button>
    </>
  );
}
