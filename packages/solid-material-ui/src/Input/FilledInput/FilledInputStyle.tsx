﻿import { glob } from "solid-styled-components";

(() => glob`
.FilledInput-Root {
    position: relative;
    transition: background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    background-color: rgba(calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), 0.09);
    border-top-left-radius: calc(var(--theme-shape-border-radius) * 1px);
    border-top-right-radius: calc(var(--theme-shape-border-radius) * 1px);
}

.FilledInput-Root:hover {
    background-color: rgba(calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), 0.13);
}

.FilledInput-Root.FilledInput-Focused {
    background-color: rgba(calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), 0.09);
}

.FilledInput-Root.FilledInput-Disabled {
    background-color: rgba(calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), 0.12);
}

@media (hover: none) {
    .FilledInput-Root:hover {
        background-color: rgba(calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), 0.09);
    }
}

.FilledInput-Underline:after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid var(--theme-palette-primary-alternate);
    pointer-events: none;
}

.FilledInput-Underline.FilledInput-Focused:after {
    transform: scaleX(1);
}

.FilledInput-Underline.FilledInput-Error:after {
    transform: scaleX(1);
    border-bottom-color: var(--theme-palette-error-main);
}

.FilledInput-Underline:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: "\\00a0";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(0.42 * var(--theme-mode-dark) + 0.7 * (1 - var(--theme-mode-dark))));
    pointer-events: none;
}

.FilledInput-Underline:hover:before {
    border-bottom: 1px solid var(--theme-palette-text-primary);
}

.FilledInput-Underline.FilledInput-Disabled:before {
    border-bottom-style: dotted;
}

.FilledInput-StartAdornment {
    padding-left: 12px;
}

.FilledInput-EndAdornment {
    padding-right: 12px;
}

.FilledInput-Multiline {
    padding: 27px 12px 10px;
}

.FilledInput-Multiline.FilledInput-Margin-Dense {
    padding-top: 23px;
    padding-bottom: 6px;
}

.FilledInput-Input {
    padding: 27px 12px 10px;
}

.FilledInput-Input:-webkit-autofill {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}

.FilledInput-Input-Margin-Dense {
    padding-top: 23px;
    padding-bottom: 6px;
}

.FilledInput-Input-HiddenLabel {
    padding-top: 18px;
    padding-bottom: 19px;
}

.FilledInput-Input-HiddenLabel.FilledInput-Input-Margin-Dense {
    padding-top: 10px;
    padding-bottom: 11px;
}

.FilledInput-Input-Select {
    padding-right: 24px;
}

.FilledInput-Input-Multiline {
    padding: 0;
}

.FilledInput-Input-StartAdornment {
    padding-left: 0;
}

.FilledInput-Input-StartAdornment {
    padding-right: 0;
}
`)();