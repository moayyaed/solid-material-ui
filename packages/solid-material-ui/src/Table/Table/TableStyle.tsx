﻿import { glob } from "solid-styled-components";

(() => glob`
.Table-Root {
    width: 100%;
    display: table;
    border-spacing: 0;
    border-collapse: collapse;
}

.Table-Root caption {
    color: var(--theme-palette-text-secondary);
    padding: calc(var(--theme-spacing) * 2px);
    text-align: left;
    caption-side: bottom;
    font-size: var(--theme-typography-body2-font-size);
    font-family: var(--theme-typography-body2-font-family);
    font-weight: var(--theme-typography-body2-font-weight);
    line-height: var(--theme-typography-body2-line-height);
    letter-spacing: var(--theme-typography-body2-letter-spacing);
}

.Table-StickyHeader {
    border-collapse: separate;
}
`)();