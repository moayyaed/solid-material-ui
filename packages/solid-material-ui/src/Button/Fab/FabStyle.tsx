﻿import { glob } from "solid-styled-components";

(() => glob`
.Fab-Root {
    color: var(--theme-palette-grey300-contrast-text);
    width: 56px;
    height: 56px;
    padding: 0;
    min-width: 0;
    box-shadow: var(--theme-shadow6);
    box-sizing: border-box;
    min-height: 36px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: var(--theme-typography-button-font-size);
    font-family: var(--theme-typography-button-font-family);
    font-weight: var(--theme-typography-button-font-weight);
    line-height: var(--theme-typography-button-line-height);
    letter-spacing: var(--theme-typography-button-letter-spacing);
    text-transform: var(--theme-typography-button-text-transform);
    border-radius: 50%;
    background-color: var(--theme-palette-grey300);
}

.Fab-Root:active {
    box-shadow: var(--theme-shadow12);
}

.Fab-Root.Fab-FocusVisible {
    box-shadow: var(--theme-shadow6);
}

.Fab-Root:hover {
    text-decoration: none;
    background-color: var(--theme-palette-greyA100);
}

.Fab-Root.Fab-Disabled {
    color: var(--theme-palette-action-disabled);
    box-shadow: var(--theme-shadow0, none);
    background-color: var(--theme-palette-action-disabled-background);
}

@media (hover: none) {
    .Fab-Root:hover {
        background-color: var(--theme-palette-grey300);
    }
}

.Fab-Root:hover.Fab-Disabled {
    background-color: var(--theme-palette-action-disabled-background);
}

.Fab-Label {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
}

.Fab-Primary {
    color: var(--theme-palette-primary-contrast-text);
    background-color: var(--theme-palette-primary-main);
}

.Fab-Primary:hover {
    background-color: var(--theme-palette-primary-dark);
}

@media (hover: none) {
    .Fab-Primary:hover {
        background-color: var(--theme-palette-primary-main);
    }
}

.Fab-Secondary {
    color: var(--theme-palette-secondary-contrast-text);
    background-color: var(--theme-palette-secondary-main);
}

.Fab-Secondary:hover {
    background-color: var(--theme-palette-secondary-dark);
}

@media (hover: none) {
    .Fab-Secondary:hover {
        background-color: var(--theme-palette-secondary-main);
    }
}

.Fab-Extended {
    width: auto;
    height: 48px;
    padding: 0 16px;
    min-width: 48px;
    min-height: auto;
    border-radius: 24px;
}

.Fab-Extended.Fab-Size-Small {
    width: auto;
    height: 34px;
    padding: 0 8px;
    min-width: 34px;
    border-radius: 17px;
}

.Fab-Extended.Fab-Size-Medium {
    width: auto;
    height: 40px;
    padding: 0 16px;
    min-width: 40px;
    border-radius: 20px;
}

.Fab-Color-Inherit {
    color: inherit;
}

.Fab-Size-Small {
    width: 40px;
    height: 40px;
}

.Fab-Size-Medium {
    width: 48px;
    height: 48px;
}
`)();