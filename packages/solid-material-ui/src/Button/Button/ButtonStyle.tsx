﻿import { glob } from "solid-styled-components";

(() => glob`
.Button-Root {
    color: var(--theme-palette-text-primary);
    border-radius: calc(var(--theme-shape-border-radius) * 1px);
    padding: 6px 16px;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: var(--theme-typography-button-font-size);
    font-family: var(--theme-typography-button-font-family);
    font-weight: var(--theme-typography-button-font-weight);
    line-height: var(--theme-typography-button-line-height);
    letter-spacing: var(--theme-typography-button-letter-spacing);
    text-transform: var(--theme-typography-button-text-transform);
}

.Button-Root:hover {
    text-decoration: none;
    background-color: var(--theme-palette-primary-hover);
}

.Button-Root.Button-Disabled {
    color: var(--theme-palette-action-disabled);
}

@media (hover: none) {
    .Button-Root:hover {
        background-color: transparent;
    }
}

.Button-Root:hover.Button-Disabled {
    background-color: transparent;
}

.Button-Label {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
}

.Button-Text {
    padding: 6px 8px;
}

.Button-Text-Primary {
    color: var(--theme-palette-primary-main);
}

.Button-Text-Primary:hover {
    background-color: var(--theme-palette-primary-hover);
}

@media (hover: none) {
    .Button-Text-Primary:hover {
        background-color: transparent;
    }
}

.Button-Text-Secondary {
    color: var(--theme-palette-secondary-main);
}

.Button-Text-Secondary:hover {
    background-color: var(--theme-palette-secondary-hover);
}

@media (hover: none) {
    .Button-Text-Secondary:hover {
        background-color: transparent;
    }
}

.Button-Outlined {
    border: 1px solid var(--theme-component-button-border-outlined);
    padding: 5px 15px;
}

.Button-Outlined.Button-Disabled {
    border: 1px solid var(--theme-palette-action-disabled);
}

.Button-Outlined-Primary {
    color: var(--theme-palette-primary-main);
    border: 1px solid var(--theme-component-button-border-outlined);
}

.Button-Outlined-Primary:hover {
    border: 1px solid var(--theme-palette-primary-main);
    background-color: var(--theme-palette-primary-hover);
}

@media (hover: none) {
    .Button-Outlined-Primary:hover {
        background-color: transparent;
    }
}

.Button-Outlined-Secondary {
    color: var(--theme-palette-secondary-main);
    border: 1px solid var(--theme-palette-secondary-border);
}

.Button-Outlined-Secondary:hover {
    border: 1px solid var(--theme-palette-secondary-main);
    background-color: var(--theme-palette-secondary-hover);
}

.Button-Outlined-Secondary.Button-Disabled {
    border: 1px solid var(--theme-palette-action-disabled);
}

@media (hover: none) {
    .Button-Outlined-Secondary:hover {
        background-color: transparent;
    }
}

.Button-Contained {
    color: var(--theme-palette-grey300-contrast-text);
    box-shadow: var(--theme-shadow2);
    background-color: var(--theme-palette-grey300);
}

.Button-Contained:hover {
    box-shadow: var(--theme-shadow4);
    background-color: var(--theme-palette-greyA100);
}

.Button-Contained.Button-FocusVisible {
    box-shadow: var(--theme-shadow6);
}

.Button-Contained:active {
    box-shadow: var(--theme-shadow8);
}

.Button-Contained.Button-Disabled {
    color: var(--theme-palette-action-disabled);
    box-shadow: none;
    background-color: var(--theme-palette-action-disabled-background);
}

@media (hover: none) {
    .Button-Contained:hover {
        box-shadow: var(--theme-shadow2);
        background-color: var(--theme-palette-greyA100);
    }
}

.Button-Contained:hover.Button-Disabled {
    background-color: var(--theme-palette-action-disabled-background);
}

.Button-Contained-Primary {
    color: var(--theme-palette-primary-contrast-text);
    background-color: var(--theme-palette-primary-main);
}

.Button-Contained-Primary:hover {
    background-color: var(--theme-palette-primary-dark);
}

@media (hover: none) {
    .Button-Contained-Primary:hover {
        background-color: var(--theme-palette-primary-main);
    }
}

.Button-Contained-Secondary {
    color: var(--theme-palette-secondary-contrast-text);
    background-color: var(--theme-palette-secondary-main);
}

.Button-Contained-Secondary:hover {
    background-color: var(--theme-palette-secondary-dark);
}

@media (hover: none) {
    .Button-Contained-Secondary:hover {
        background-color: var(--theme-palette-secondary-main);
    }
}

.Button-Color-Inherit {
    color: inherit;
    border-color: currentColor;
}

.Button-Text-Size-Small {
    padding: 4px 5px;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 13rem);
}

.Button-Text-Size-Large {
    padding: 8px 11px;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 15rem);
}

.Button-Outlined-Size-Small {
    padding: 3px 9px;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 13rem);
}

.Button-Outlined-Size-Large {
    padding: 7px 21px;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 15rem);
}

.Button-Contained-Size-Small {
    padding: 4px 10px;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 13rem);
}

.Button-Contained-Size-Large {
    padding: 8px 22px;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 15rem);
}

.Button-FullWidth {
    width: 100%;
}

.Button-StartIcon {
    display: inherit;
    margin-left: -4px;
    margin-right: 8px;
}

.Button-EndIcon {
    display: inherit;
    margin-left: 8px;
    margin-right: -4px;
}

.Button-Icon-Size-Small > *:first-child {
    font-size: 18px;
}

.Button-Icon-Size-Medium > *:first-child {
    font-size: 20px;
}

.Button-Icon-Size-Large > *:first-child {
    font-size: 22px;
}
`)();