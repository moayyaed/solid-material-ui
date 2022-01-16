﻿import { glob } from "solid-styled-components";

(() => glob`
.NotchedOutline-Root {
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    transition: padding-left 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,border-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    border-style: solid;
    border-width: 1px;
    border-radius: calc(var(--theme-shape-border-radius) * 1px);
    pointer-events: none;
}

.NotchedOutline-Legend {
    padding: 0;
    text-align: left;
    transition: width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    line-height: 11px;
}
`)();