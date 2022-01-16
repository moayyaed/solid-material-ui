﻿import { glob } from "solid-styled-components";

(() => glob`
.SwitchBase-Root {
    padding: 9px;
}

.SwitchBase-Input {
    top: 0;
    left: 0;
    width: 100%;
    cursor: inherit;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    z-index: 1;
    position: absolute;
}
`)();