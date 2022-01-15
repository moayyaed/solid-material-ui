import { JSX, Show } from "solid-js";
import {
  Brightness4Icon,
  Brightness7Icon,
  Color,
  IconButton,
} from "solid-material-ui";

import { useTheme } from "../Theme";

export function ThemeToggler(): JSX.Element {
  const themeContext = useTheme();
  return (
    <IconButton
      color={Color.Inherit}
      onClick={themeContext?.toggle}
      aria-label="Toggle light/dark theme"
      title="Toggle light/dark theme"
    >
      <Show
        when={themeContext?.theme === "light"}
        fallback={<Brightness7Icon />}
      >
        <Brightness4Icon />
      </Show>
    </IconButton>
  );
}
