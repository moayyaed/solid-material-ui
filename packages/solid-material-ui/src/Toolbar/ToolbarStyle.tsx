import { glob } from "solid-styled-components";

(() => glob`
.Toolbar-Root {
    display: flex;
    position: relative;
    align-items: center;
}

.Toolbar-Gutters {
    padding-left: calc(var(--theme-spacing) * 2px);
    padding-right: calc(var(--theme-spacing) * 2px);
}

@media (min-width:600px) {
    .Toolbar-Gutters {
        padding-left: calc(var(--theme-spacing) * 3px);
        padding-right: calc(var(--theme-spacing) * 3px);
    }
}

.Toolbar-Regular {
    min-height: 56px;
}

@media (min-width:0px) and (orientation: landscape) {
    .Toolbar-Regular {
        min-height: 48px;
    }
}

@media (min-width:600px) {
    .Toolbar-Regular {
        min-height: 64px;
    }
}

.Toolbar-Dense {
    min-height: 48px;
}
`)();
