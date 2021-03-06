import { glob } from "solid-styled-components";

(() => glob`
.Alert-Root {
    display: flex;
    padding: 6px 16px;
    font-size: var(--theme-typography-body2-font-size);
    font-family: var(--theme-typography-body2-font-family);
    font-weight: var(--theme-typography-body2-font-weight);
    line-height: var(--theme-typography-body2-line-height);
    letter-spacing: var(--theme-typography-body2-letter-spacing);
    border-radius: calc(var(--theme-shape-border-radius) * 1px);
    background-color: transparent;
}

.Alert-Standard-Success {
    color: var(--theme-palette-success-color);
    background-color: var(--theme-palette-success-background);
}

.Alert-Standard-Success .Alert-Icon {
    color: var(--theme-palette-success-main);
}

.Alert-Standard-Info {
    color: var(--theme-palette-info-color);
    background-color: var(--theme-palette-info-background);
}

.Alert-Standard-Info .Alert-Icon {
    color: var(--theme-palette-info-main);
}

.Alert-Standard-Warning {
    color: var(--theme-palette-warning-color);
    background-color: var(--theme-palette-warning-background);
}

.Alert-Standard-Warning .Alert-Icon {
    color: var(--theme-palette-warning-main);
}

.Alert-Standard-Error {
    color: var(--theme-palette-error-color);
    background-color: var(--theme-palette-error-background);
}

.Alert-Standard-Error .Alert-Icon {
    color: var(--theme-palette-error-main);
}

.Alert-Outlined-Success {
    color: var(--theme-palette-success-color);
    border: 1px solid var(--theme-palette-success-main);;
}

.Alert-Outlined-Success .Alert-Icon {
    color: var(--theme-palette-success-main);;
}

.Alert-Outlined-Info {
    color: var(--theme-palette-info-color);
    border: 1px solid var(--theme-palette-info-main);
}

.Alert-Outlined-Info .Alert-Icon {
    color: var(--theme-palette-info-main);
}

.Alert-Outlined-Warning {
    color: var(--theme-palette-warning-color);
    border: 1px solid var(--theme-palette-warning-main);
}

.Alert-Outlined-Warning .Alert-Icon {
    color: var(--theme-palette-warning-main);
}

.Alert-Outlined-Error {
    color: var(--theme-palette-error-color);
    border: 1px solid var(--theme-palette-error-main);
}

.Alert-Outlined-Error .Alert-Icon {
    color:var(--theme-palette-error-main);
}

.Alert-Filled-Success {
    color: #fff;
    font-weight: var(--theme-typography-font-weight-medium);
    background-color:var(--theme-palette-success-main);
}

.Alert-Filled-Info {
    color: #fff;
    font-weight: var(--theme-typography-font-weight-medium);
    background-color:var(--theme-palette-info-main);
}

.Alert-Filled-Warning {
    color: #fff;
    font-weight: var(--theme-typography-font-weight-medium);
    background-color:var(--theme-palette-warning-main);
}

.Alert-Filled-Error {
    color: #fff;
    font-weight: var(--theme-typography-font-weight-medium);
    background-color:var(--theme-palette-error-main);
}

.Alert-Icon {
    display: flex;
    opacity: 0.9;
    padding: 7px 0;
    font-size: 22px;
    margin-right: 12px;
}

.Alert-Message {
    padding: 8px 0;
}

.Alert-Action {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: -8px;
    padding-left: 16px;
}
`)();