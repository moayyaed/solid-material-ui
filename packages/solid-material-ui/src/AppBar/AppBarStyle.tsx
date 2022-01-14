import { glob } from "solid-styled-components";

(() => glob`
.AppBar-Root {
  width: 100%;
  display: flex;
  z-index: var(--theme-zindex-appbar);
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
}

.AppBar-Position-Fixed {
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
}

.AppBar-Position-Absolute {
  top: 0;
  left: auto;
  right: 0;
  position: absolute;
}

.AppBar-Position-Sticky {
  top: 0;
  left: auto;
  right: 0;
  position: sticky;
}

.AppBar-Position-Static {
  position: static;
  transform: translateZ(0);
}

.AppBar-Position-Relative {
  position: relative;
}

.AppBar-Color-Default {
  color: var(--theme-palette-grey-contrast-text-default);
  background-color: var(--theme-palette-grey-background-default);
}

.AppBar-Color-Primary {
  color: var(--theme-palette-primary-contrast-text);
  background-color: var(--theme-palette-primary-main);
}

.AppBar-Color-Secondary {
  color: var(--theme-palette-secondary-contrast-text);
  background-color: var(--theme-palette-secondary-main);
}

.AppBar-Color-Custom {
  color: var(--theme-custom-palette-primary-contrast-text);
  background-color: var(--theme-custom-palette-primary-main);
}
`)();
