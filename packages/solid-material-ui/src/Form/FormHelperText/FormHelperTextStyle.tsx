﻿import { glob } from "solid-styled-components";

(() => glob`
.FormHelperText-Root {
    color: var(--theme-palette-text-secondary);
    margin: 0;
    margin-top: 8px;
    min-height: 1em;
    text-align: left;
    line-height: 1em;

    font-size: var(--theme-typography-caption-font-size);
    font-family: var(--theme-typography-caption-font-family);
    font-weight: var(--theme-typography-caption-font-weight);
    letter-spacing: var(--theme-typography-caption-letter-spacing);
}

.FormHelperText-Root.FormHelperText-Disabled {
    color: var(--theme-palette-text-disabled);
}

.FormHelperText-Root.FormHelperText-Error {
    color: var(--theme-palette-error-main);
}

.FormHelperText-Margin-Dense {
    margin-top: 4px;
}

.FormHelperText-Contained {
    margin: 8px 14px 0;
}
`)();