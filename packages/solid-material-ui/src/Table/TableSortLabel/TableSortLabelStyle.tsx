﻿import { glob } from "solid-styled-components";

(() => glob`
.TableSortLabel-Root {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    flex-direction: inherit;
    justify-content: flex-start;
}

.TableSortLabel-Root:focus {
    color: var(--theme-palette-text-secondary);
}

.TableSortLabel-Root:hover {
    color: var(--theme-palette-text-secondary);
}

.TableSortLabel-Root.TableSortLabel-Active {
    color: var(--theme-palette-text-primary);
}

.TableSortLabel-Root
.TableSortLabel-Active
.TableSortLabel-Root
.TableSortLabel-Active
.TableSortLabel-Icon {
    color: var(--theme-palette-text-secondary);
    opacity: 1;
}

.TableSortLabel-Root:hover .TableSortLabel-Icon {
    opacity: 1;
}

.TableSortLabel-Icon {
    opacity: 0;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    margin-left: 4px;
    user-select: none;
    margin-right: 4px;
}

.TableSortLabel-Icon-Direction-Descending {
    transform: rotate(0deg);
}

.TableSortLabel-Icon-Direction-Ascending {
    transform: rotate(180deg);
}
`)();