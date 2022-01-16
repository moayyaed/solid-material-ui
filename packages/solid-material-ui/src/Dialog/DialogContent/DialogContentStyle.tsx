import { glob } from "solid-styled-components";

(() => glob`
.DialogContent-Root {
    flex: 1 1 auto;
    padding: 8px 24px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

.DialogContent-Root:first-child {
    padding-top: 20px;
}

.DialogContent-Dividers {
    padding: 16px 24px;
    border-top: 1px solid var(--theme-palette-divider);
    border-bottom: 1px solid var(--theme-palette-divider);
}
`)();