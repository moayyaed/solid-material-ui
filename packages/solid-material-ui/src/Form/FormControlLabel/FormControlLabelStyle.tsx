﻿import { glob } from "solid-styled-components";

(() => glob`
.FormControlLabel-Root {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-left: -11px;
    margin-right: 16px;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
}

.FormControlLabel-Root.FormControlLabel-Disabled {
    cursor: default;
}

.FormControlLabel-Placement-Start {
    margin-left: 16px;
    margin-right: -11px;
    flex-direction: row-reverse;
}

.FormControlLabel-Placement-Top {
    margin-left: 16px;
    flex-direction: column-reverse;
}

.FormControlLabel-Placement-Bottom {
    margin-left: 16px;
    flex-direction: column;
}

.FormControlLabel-Label.FormControlLabel-Disabled {
    color: var(--theme-palette-text-disabled);
}
`)();