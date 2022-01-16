﻿import { glob } from "solid-styled-components";

(() => glob`
.InputBase-Root {
    color: var(--theme-palette-text-primary);
    cursor: text;
    display: inline-flex;
    position: relative;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 16rem);
    box-sizing: border-box;
    align-items: center;
    font-family: var(--theme-typography-font-family);
    line-height: 1.1875em;
}

.InputBase-Root.InputBase-Disabled {
    color: var(--theme-palette-text-disabled);
    cursor: default;
}

.InputBase-Multiline {
    padding: 6px 0 7px;
}

.InputBase-Multiline.InputBase-Margin-Dense {
    padding-top: 3px;
}

.InputBase-FullWidth {
    width: 100%;
}

.InputBase-Input {
    font: inherit;
    color: currentColor;
    width: 100%;
    border: 0;
    height: 1.1875em;
    margin: 0;
    display: block;
    padding: 6px 0 7px;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    animation-name: InputBase-keyframes-auto-fill-cancel;
    -webkit-tap-highlight-color: transparent;
}

.InputBase-Input::-webkit-input-placeholder {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.InputBase-Input::-moz-placeholder {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.InputBase-Input:-ms-input-placeholder {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.InputBase-Input::-ms-input-placeholder {
    color: currentColor;
    opacity: 0.42;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.InputBase-Input:focus {
    outline: 0;
}

.InputBase-Input:invalid {
    box-shadow: none;
}

.InputBase-Input::-webkit-search-decoration {
    -webkit-appearance: none;
}

.InputBase-Input.InputBase-Disabled {
    opacity: 1;
}

.InputBase-Input:-webkit-autofill {
    animation-name: InputBase-keyframes-auto-fill;
    animation-duration: 5000s;
}

label[data-shrink="false"] + .InputBase-FormControl .InputBase-Input::-webkit-input-placeholder {
    opacity: 0 !important;
}

label[data-shrink="false"] + .InputBase-FormControl .InputBase-Input::-moz-placeholder {
    opacity: 0 !important;
}

label[data-shrink="false"] + .InputBase-FormControl .InputBase-Input:-ms-input-placeholder {
    opacity: 0 !important;
}

label[data-shrink="false"] + .InputBase-FormControl .InputBase-Input::-ms-input-placeholder {
    opacity: 0 !important;
}

label[data-shrink="false"] + .InputBase-FormControl .InputBase-Input:focus::-webkit-input-placeholder {
    opacity: 0.42;
}

label[data-shrink="false"] + .InputBase-FormControl .InputBase-Input:focus::-moz-placeholder {
    opacity: 0.42;
}

label[data-shrink="false"] + .InputBase-FormControl .InputBase-Input:focus:-ms-input-placeholder {
    opacity: 0.42;
}

label[data-shrink="false"] + .InputBase-FormControl .InputBase-Input:focus::-ms-input-placeholder {
    opacity: 0.42;
}

.InputBase-Input-Margin-Dense {
    padding-top: 3px;
}

.InputBase-Input-Select {
    padding-right: 24px;
}

.InputBase-Input-Multiline {
    height: auto;
    resize: none;
    padding: 0;
}

.InputBase-Input-TypeSearch {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
}
`)();