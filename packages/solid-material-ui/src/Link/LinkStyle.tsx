﻿import { glob } from "solid-styled-components";

(() => glob`
.Link-Underline-None {
    text-decoration: none;
}

.Link-Underline-Hover {
    text-decoration: none;
}

.Link-Underline-Hover:hover {
    text-decoration: underline;
}

.Link-Underline-Always {
    text-decoration: underline;
}

.Link-Button {
    border: 0;
    cursor: pointer;
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    -moz-appearance: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
}

.Link-Button::-moz-focus-inner {
    border-style: none;
}

.Link-Button.Link-FocusVisible {
    outline: auto;
}
`)();