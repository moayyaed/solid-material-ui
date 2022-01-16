﻿import { glob } from "solid-styled-components";

(() => glob`
.DialogActions-Root {
    flex: 0 0 auto;
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: flex-end;
}

.DialogActions-Spacing > * + * {
    margin-left: 8px;
}
`)();