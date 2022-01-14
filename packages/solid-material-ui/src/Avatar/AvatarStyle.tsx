import { glob } from "solid-styled-components";

(() => glob`
.Avatar-Root {
  font-family: var(--theme-typography-font-family);
  font-size: var(--theme-typography-font-size-medium);
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  align-items: center;
  user-select: none;
  border-radius: 50%;
  line-height: 1;
  justify-content: center;
}

.Avatar-Color-Default {
  color: var(--theme-palette-background-default);
  background-color: var(--theme-component-avatar-background);
}

.Avatar-Image {
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
}
`)();
