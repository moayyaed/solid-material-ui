﻿import { glob } from "solid-styled-components";

(() => glob`
.TableRow-Root {
    color: inherit;
    display: table-row;
    outline: 0;
    vertical-align: middle;
}

.TableRow-Root.TableRow-Selected {
    background-color: var(--theme-component-table-row-background-selected);
}

.TableRow-Root.TableRow-Hover:hover {
    background-color: var(--theme-component-table-row-background-hover);
}

.TableRow-Head {
}

.TableRow-Foot {
}

.TableRow-Body {
}
`)();