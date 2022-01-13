﻿import { glob } from "solid-styled-components";

(() => glob`
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*, *::before, *::after {
    box-sizing: inherit;
}

strong, b {
    font-weight: bolder;
}

body {
    color: var(--theme-palette-text-primary);
    margin: 0;
    font-size: var(--theme-typography-body2-font-size);
    font-family: var(--theme-typography-body2-font-family);
    font-weight: var(--theme-typography-body2-font-weight);
    line-height: var(--theme-typography-body2-line-height);
    letter-spacing: var(--theme-typography-body2-letter-spacing);
    background-color: var(--theme-palette-background-default);
}

@media print {
    body {
        background-color: var(--theme-palette-common-white);
    }
}

body::backdrop {
    background-color: var(--theme-palette-background-default);
}
`)();
