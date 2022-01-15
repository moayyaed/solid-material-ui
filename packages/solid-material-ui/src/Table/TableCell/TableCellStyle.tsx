﻿import { glob } from "solid-styled-components";

(() => glob`
.TableCell-Root {
    display: table-cell;
    padding: 16px;
    vertical-align: inherit;
    text-align: left;
    border-bottom: 1px solid var(--theme-component-table-cell-border-bottom);
    font-size: var(--theme-typography-body2-font-size);
    font-family: var(--theme-typography-body2-font-family);
    font-weight: var(--theme-typography-body2-font-weight);
    line-height: var(--theme-typography-body2-line-height);
    letter-spacing: var(--theme-typography-body2-letter-spacing);
}

.TableCell-Head {
    color: var(--theme-palette-text-primary);
    font-weight: var(--theme-typography-font-weight-medium);
    line-height: calc(var(--theme-font-size-rem-factor, 0.0625) * 24rem);
}

.TableCell-Body {
    color: var(--theme-palette-text-primary);
}

.TableCell-Footer {
    color: var(--theme-palette-text-secondary);
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 12rem);
    line-height: calc(var(--theme-font-size-rem-factor, 0.0625) * 21rem);
}

.TableCell-Size-Small {
    padding: 6px 24px 6px 16px;
}

.TableCell-Size-Small:last-child {
    padding-right: 16px;
}

.TableCell-Size-Small.TableCell-Padding-Checkbox {
    width: 24px;
    padding: 0px 12px 0 16px;
}

.TableCell-Size-Small.TableCell-Padding-Checkbox:last-child {
    padding-left: 12px;
    padding-right: 16px;
}

.TableCell-Size-Small.TableCell-Padding-Checkbox > * {
    padding: 0;
}

.TableCell-Padding-Checkbox {
    width: 48px;
    padding: 0 0 0 4px;
}

.TableCell-Padding-Checkbox:last-child {
    padding-left: 0;
    padding-right: 4px;
}

.TableCell-Padding-None {
    padding: 0;
}

.TableCell-Padding-None:last-child {
    padding: 0;
}

.TableCell-Align-Left {
    text-align: left;
}

.TableCell-Align-Center {
    text-align: center;
}

.TableCell-Align-Right {
    text-align: right;
    flex-direction: row-reverse;
}

.TableCell-Align-Justify {
    text-align: justify;
}

.TableCell-StickyHeader {
    top: 0;
    left: 0;
    z-index: 2;
    position: sticky;
    background-color: var(--theme-palette-background-default);
}
`)();