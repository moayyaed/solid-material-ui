﻿import { glob } from "solid-styled-components";

(() => glob`
.IconButton-Root {
    flex: 0 0 auto;
    color: var(--theme-palette-action-active);
    padding: 12px;
    overflow: visible;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 1.5rem);
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
}

.IconButton-Root:hover {
    background-color: var(--theme-palette-primary-hover);
}

.IconButton-Root.IconButton-Disabled {
    color: var(--theme-palette-action-disabled);
    background-color: transparent;
}

@media (hover: none) {
    .IconButton-Root:hover {
        background-color: transparent;
    }
}

.IconButton-Edge-Start {
    margin-left: -12px;
}

.IconButton-Size-Small.IconButton-Edge-Start {
    margin-left: -3px;
}

.IconButton-Edge-End {
    margin-right: -12px;
}

.IconButton-Size-Small.IconButton-Edge-End {
    margin-right: -3px;
}

.IconButton-Color-Inherit {
    color: inherit;
}

.IconButton-Color-Primary {
    color: var(--theme-palette-primary-main);
}

.IconButton-Color-Primary:hover {
    background-color: var(--theme-palette-primary-hover);
}

@media (hover: none) {
    .IconButton-Color-Primary:hover {
        background-color: transparent;
    }
}

.IconButton-Color-Secondary {
    color: var(--theme-palette-secondary-main);
}

.IconButton-Color-Secondary:hover {
    background-color: var(--theme-palette-secondary-hover);
}

@media (hover: none) {
    .IconButton-Color-Secondary:hover {
        background-color: transparent;
    }
}

.IconButton-Size-Small {
    padding: 3px;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 18rem);
}

.IconButton-Label {
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}
`)();