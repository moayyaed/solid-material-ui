﻿import { glob } from "solid-styled-components";

(() => glob`
.InputAdornment-Root {
    height: 0.01em;
    display: flex;
    max-height: 2em;
    align-items: center;
}

.InputAdornment-Filled.InputAdornment-Position-Start:not(.InputAdornment-HiddenLabel) {
    margin-top: 16px;
}

.InputAdornment-Position-Start {
    margin-right: 8px;
}

.InputAdornment-Position-End {
    margin-left: 8px;
}

.InputAdornment-DisablePointerEvents {
    pointer-events: none;
}
`)();