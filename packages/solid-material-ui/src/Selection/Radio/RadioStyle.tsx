﻿import { glob } from "solid-styled-components";

(() => glob`
.Radio-Root {
    color: var(--theme-palette-text-secondary);
}

.Radio-Color-Primary.Radio-Checked {
    color: var(--theme-palette-primary-main);
}

.Radio-Color-Primary.Radio-Disabled {
    color: var(--theme-palette-action-disabled);
}

.Radio-Color-Primary.Radio-Checked:hover {
    background-color: var(--theme-palette-primary-hover);
}

@media (hover: none) {
    .Radio-Color-Primary.Radio-Checked:hover {
        background-color: transparent;
    }
}

.Radio-Color-Secondary.Radio-Checked {
    color: var(--theme-palette-secondary-main);
}

.Radio-Color-Secondary.Radio-Disabled {
    color: var(--theme-palette-action-disabled);
}

.Radio-Color-Secondary.Radio-Checked:hover {
    background-color: var(--theme-palette-secondary-hover);
}

@media (hover: none) {
    .Radio-Color-Secondary.Radio-Checked:hover {
        background-color: transparent;
    }
}
`)();