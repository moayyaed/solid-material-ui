﻿import { glob } from "solid-styled-components";

(() => glob`
.ListItemIcon-Root {
    color: var(--theme-palette-action-active);
    display: inline-flex;
    min-width: 56px;
    flex-shrink: 0;
}

.ListItemIcon-AlignItems-FlexStart {
    margin-top: 8px;
}
`)();