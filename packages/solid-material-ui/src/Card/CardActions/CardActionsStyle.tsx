﻿import { glob } from "solid-styled-components";

(() => glob`
.CardActions-Root {
    display: flex;
    padding: 8px;
    align-items: center;
}

.CardActions-Spacing > * + * {
    margin-left: 8px;
}
`)();