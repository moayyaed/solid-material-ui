﻿import { glob } from "solid-styled-components";

(() => glob`
.FormControl-Root {
    margin: 0;
    border: 0;
    display: inline-flex;
    padding: 0;
    position: relative;
    min-width: 0;
    flex-direction: column;
    vertical-align: top;
}

.FormControl-Margin-Normal {
    margin-top: 16px;
    margin-bottom: 8px;
}

.FormControl-Margin-Dense {
    margin-top: 8px;
    margin-bottom: 4px;
}

.FormControl-FullWidth {
    width: 100%;
}
`)();