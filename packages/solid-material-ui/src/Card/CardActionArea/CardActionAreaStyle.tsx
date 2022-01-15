﻿import { glob } from "solid-styled-components";

(() => glob`
.CardActionArea-Root {
    width: 100%;
    display: block;
    text-align: inherit;
}

.CardActionArea-Root:hover .CardActionArea-Highlight {
    opacity: var(--theme-palette-action-hover-opacity);
}

.CardActionArea-Root.CardActionArea-FocusVisible .CardActionArea-Highlight {
    opacity: 0.12;
}

.CardActionArea-Highlight {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: inherit;
    pointer-events: none;
    background-color: currentcolor;
}
`)();