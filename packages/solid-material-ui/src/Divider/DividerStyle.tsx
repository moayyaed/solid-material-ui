﻿import { glob } from "solid-styled-components";

(() => glob`
.Divider-Root {
    border: none;
    height: 1px;
    margin: 0;
    flex-shrink: 0;
    background-color: var(--theme-palette-divider);
}

.Divider-Absolute {
    left: 0;
    width: 100%;
    bottom: 0;
    position: absolute;
}

.Divider-Inset {
    margin-left: 72px;
}

.Divider-Light {
    background-color: var(--theme-component-divider-background-color);
}

.Divider-Middle {
    margin-left: calc(var(--theme-spacing) * 2px);
    margin-right: calc(var(--theme-spacing) * 2px);
}

.Divider-Vertical {
    width: 1px;
    height: 100%;
}
`)();