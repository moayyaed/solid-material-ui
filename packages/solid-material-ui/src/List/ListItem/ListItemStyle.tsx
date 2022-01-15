﻿import { glob } from "solid-styled-components";

(() => glob`
.ListItem-Root {
    width: 100%;
    display: flex;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: flex-start;
    text-decoration: none;
}

.ListItem-Root.ListItem-FocusVisible {
    background-color: var(--theme-palette-action-selected);
}

.ListItem-Root.ListItem-Selected, .ListItem-Root.ListItem-Selected:hover {
    background-color: var(--theme-palette-action-selected);
}

.ListItem-Root.ListItem-Disabled {
    opacity: 0.5;
}

.ListItem-Container {
    position: relative;
}

.ListItem-Dense {
    padding-top: 4px;
    padding-bottom: 4px;
}

.ListItem-AlignItems-FlexStart {
    align-items: flex-start;
}

.ListItem-Divider {
    border-bottom: 1px solid var(--theme-palette-divider);
    background-clip: padding-box;
}

.ListItem-Gutters {
    padding-left: 16px;
    padding-right: 16px;
}

.ListItem-Button {
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.ListItem-Button:hover {
    text-decoration: none;
    background-color: var(--theme-palette-action-hover);
}

@media (hover: none) {
    .ListItem-Button:hover {
        background-color: transparent;
    }
}

.ListItem-SecondaryAction {
    padding-right: 48px;
}
`)();