﻿import { glob } from "solid-styled-components";

(() => glob`
.Input-Root {
    position: relative;
}

label + .Input-FormControl {
    margin-top: 16px;
}

.Input-Underline:after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid var(--theme-palette-primary-alternate);
    pointer-events: none;
}

.Input-Underline.Input-Focused:after {
    transform: scaleX(1);
}

.Input-Underline.Input-Error:after {
    transform: scaleX(1);
    border-bottom-color: var(--theme-palette-error-main);
}

.Input-Underline:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: "\\00a0";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid var(--theme-palette-primary-alternate);
    pointer-events: none;
}

.Input-Underline:hover:not(.Input-Disabled):before {
    border-bottom: 2px solid var(--theme-palette-text-primary);
}

.Input-Underline.Input-Disabled:before {
    border-bottom-style: dotted;
}

@media (hover: none) {
    .Input-Underline:hover:not(.Input-Disabled):before {
        border-bottom: 1px solid var(--theme-palette-primary-alternate);
    }
}
`)();