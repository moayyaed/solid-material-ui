﻿import { glob } from "solid-styled-components";

(() => glob`
.ListSubheader-Root {
    color: var(--theme-palette-text-secondary);
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 14rem);
    box-sizing: border-box;
    list-style: none;
    font-family: var(--theme-typography-font-family);
    font-weight: var(--theme-typography-font-weight-medium);
    line-height: 48px;
}

.ListSubheader-Color-Primary {
    color: var(--theme-palette-primary-main);
}

.ListSubheader-Color-Inherit {
    color: inherit;
}

.ListSubheader-Gutters {
    padding-left: 16px;
    padding-right: 16px;
}

.ListSubheader-Inset {
    padding-left: 72px;
}

.ListSubheader-Sticky {
    top: 0;
    z-index: 1;
    position: sticky;
    background-color: inherit;
}
`)();