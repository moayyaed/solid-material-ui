﻿import { glob } from "solid-styled-components";

(() => glob`
.Switch-Root {
    width: 58px;
    height: 38px;
    display: inline-flex;
    padding: 12px;
    z-index: 0;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
    vertical-align: middle;
}

.Switch-Edge-Start {
    margin-left: -8px;
}

.Switch-Edge-End {
    margin-right: -8px;
}

.Switch-SwitchBase {
    top: 0;
    left: 0;
    color: var(--theme-component-switch-color);
    z-index: 1;
    position: absolute;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.Switch-SwitchBase.Switch-Checked {
    transform: translateX(50%);
}

.Switch-SwitchBase.Switch-Disabled {
    color: var(--theme-component-switch-disabled-color);
}

.Switch-SwitchBase.Switch-Checked + 
.Switch-Track {
    opacity: 0.5;
}

.Switch-SwitchBase.Switch-Disabled + 
.Switch-Track {
    opacity: var(--theme-component-switch-disabled-opacity, 0.12);
}

.Switch-Color-Primary.Switch-Checked {
    color: var(--theme-palette-primary-main);
}

.Switch-Color-Primary.Switch-Disabled {
    color: var(--theme-component-switch-disabled-color);
}

.Switch-Color-Primary.Switch-Checked + 
.Switch-Track {
    background-color: var(--theme-palette-primary-main);
}

.Switch-Color-Primary.Switch-Disabled + 
.Switch-Track {
    background-color: var(--theme-palette-common-background);
}

.Switch-Color-Primary.Switch-Checked:hover {
    background-color: var(--theme-palette-primary-hover);
}

@media (hover: none) {
    .Switch-Color-Primary.Switch-Checked:hover {
        background-color: transparent;
    }
}

.Switch-Color-Secondary.Switch-Checked {
    color: var(--theme-palette-secondary-main);
}

.Switch-Color-Secondary.Switch-Disabled {
    color: var(--theme-component-switch-disabled-color);
}

.Switch-Color-Secondary.Switch-Checked + 
.Switch-Track {
    background-color: var(--theme-palette-secondary-main);
}

.Switch-Color-Secondary.Switch-Disabled + 
.Switch-Track {
    background-color: var(--theme-palette-common-background);
}

.Switch-Color-Secondary.Switch-Checked:hover {
    background-color: var(--theme-palette-secondary-hover);
}

@media (hover: none) {
    .Switch-Color-Secondary.Switch-Checked:hover {
        background-color: transparent;
    }
}

.Switch-Size-Small {
    width: 40px;
    height: 24px;
    padding: 7px;
}

.Switch-Size-Small 
.Switch-Thumb {
    width: 16px;
    height: 16px;
}

.Switch-Size-Small 
.Switch-SwitchBase {
    padding: 4px;
}

.Switch-Input {
    left: -100%;
    width: 300%;
}

.Switch-Thumb {
    width: 20px;
    height: 20px;
    box-shadow: var(--theme-shadow1, 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12));
    border-radius: 50%;
    background-color: currentColor;
}

.Switch-Track {
    width: 100%;
    height: 100%;
    opacity: var(--theme-custom-palette-opacity);
    z-index: -1;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 7px;
    background-color: var(--theme-custom-palette-common-alternate, #000);
}
`)();