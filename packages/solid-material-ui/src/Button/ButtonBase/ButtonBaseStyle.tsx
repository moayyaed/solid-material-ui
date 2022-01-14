﻿import { glob } from "solid-styled-components";

(() => glob`
.ButtonBase-Root {
    color: inherit;
    border: 0;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    outline: 0;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    -moz-appearance: none;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
}

.ButtonBase-Root::-moz-focus-inner {
    border-style: none;
}

.ButtonBase-Root.ButtonBase-Disabled {
    cursor: default;
    pointer-events: none;
}

.ButtonBase-Ripple {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;
    position: absolute;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
}
`)();