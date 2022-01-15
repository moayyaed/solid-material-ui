﻿import { glob } from "solid-styled-components";

(() => glob`
.CardHeader-Root {
    display: flex;
    padding: 16px;
    align-items: center;
}

.CardHeader-Avatar {
    flex: 0 0 auto;
    margin-right: 16px;
}

.CardHeader-Action {
    flex: 0 0 auto;
    align-self: flex-start;
    margin-top: -8px;
    margin-right: -8px;
}

.CardHeader-Content {
    flex: 1 1 auto;
}

.CardHeader-Title {
}

.CardHeader-SubHeader {
}
`)();