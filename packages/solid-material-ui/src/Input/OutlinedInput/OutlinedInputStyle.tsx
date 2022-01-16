﻿import { glob } from "solid-styled-components";

(() => glob`
.OutlinedInput-Root {
    position: relative;
}

.OutlinedInput-Root:hover .OutlinedInput-NotchedOutline {
    border-color: var(--theme-palette-text-primary);
}

@media (hover: none) {
    .OutlinedInput-Root:hover .OutlinedInput-NotchedOutline {
        border-color: rgba(calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), 0.23);
    }
}

.OutlinedInput-Root.OutlinedInput-Focused .OutlinedInput-NotchedOutline {
    border-color: var(--theme-palette-primary-main);
    border-width: 2px;
}

.OutlinedInput-Root.OutlinedInput-Error .OutlinedInput-NotchedOutline {
    border-color: var(--theme-palette-error-main);
}

.OutlinedInput-Root.OutlinedInput-Disabled .OutlinedInput-NotchedOutline {
    border-color: var(--theme-palette-action-disabled);
}

.OutlinedInput-StartAdornment {
    padding-left: 14px;
}

.OutlinedInput-EndAdornment {
    padding-right: 14px;
}

.OutlinedInput-Multiline {
    padding: 18.5px 14px;
}

.OutlinedInput-Multiline.OutlinedInput-Margin-Dense {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
}

.OutlinedInput-NotchedOutline {
    border-color: rgba(calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), calc(255 * var(--theme-mode-dark)), 0.23);
}

.OutlinedInput-Input {
    padding: 18.5px 14px;
}

.OutlinedInput-Input:-webkit-autofill {
    border-radius: 4px;
}

.OutlinedInput-Input-Margin-Dense {
    padding-top: 10.5px;
    padding-bottom: 10.5px;
}

.OutlinedInput-Input-Select {
    padding-right: 24px;
}

.OutlinedInput-Input-Multiline {
    padding: 0;
}

.OutlinedInput-Input-StartAdornment {
    padding-left: 0;
}

.OutlinedInput-Input-EndAdornment {
    padding-right: 0;
}
`)();