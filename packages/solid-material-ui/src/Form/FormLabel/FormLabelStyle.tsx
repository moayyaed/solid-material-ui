﻿import { glob } from "solid-styled-components";

(() => glob`
.FormLabel-Root {
    color: var(--theme-palette-text-secondary);
    padding: 0;
    line-height: 1;
    font-size: var(--theme-typography-body1-font-size);
    font-family: var(--theme-typography-body1-font-family);
    font-weight: var(--theme-typography-body1-font-weight);
    letter-spacing: var(--theme-typography-body1-letter-spacing);
}

.FormLabel-Root.FormLabel-Focused {
    color: var(--theme-palette-primary-alternate);
}

.FormLabel-Root.FormLabel-Disabled {
    color: var(--theme-palette-text-disabled);
}

.FormLabel-Root.FormLabel-Error {
    color: var(--theme-palette-error-main);
}

.FormLabel-Asterisk.FormLabel-Error {
    color: var(--theme-palette-error-main);
}
`)();