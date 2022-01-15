﻿import { glob } from "solid-styled-components";

(() => glob`
.SimpleBackdrop-Root {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    position: fixed;
    touch-action: none;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
}

.SimpleBackdrop-Invisible {
    background-color: transparent;
}
`)();