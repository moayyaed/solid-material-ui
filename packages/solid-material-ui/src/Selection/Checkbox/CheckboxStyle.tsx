﻿import { glob } from "solid-styled-components";

(() => glob`
.Checkbox-Root {
    color: var(--theme-palette-text-secondary);
}

.Checkbox-Color-Primary.Checkbox-Checked {
    color: var(--theme-palette-primary-main);
}

.Checkbox-Color-Primary.Checkbox-Disabled {
    color: var(--theme-palette-action-disabled);
}

.Checkbox-Color-Primary.Checkbox-Checked:hover {
    background-color: var(--theme-palette-primary-hover);
}

@media (hover: none) {
    .Checkbox-Color-Primary.Checkbox-Checked:hover {
        background-color: transparent;
    }
}

.Checkbox-Color-Secondary.Checkbox-Checked {
    color: var(--theme-palette-secondary-main);
}

.Checkbox-Color-Secondary.Checkbox-Disabled {
    color: var(--theme-palette-action-disabled);
}

.Checkbox-Color-Secondary.Checkbox-Checked:hover {
    background-color: var(--theme-palette-secondary-hover);
}

@media (hover: none) {
    .Checkbox-Color-Secondary.Checkbox-Checked:hover {
        background-color: transparent;
    }
}
`)();