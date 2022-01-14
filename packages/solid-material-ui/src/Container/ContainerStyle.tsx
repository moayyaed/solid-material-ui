﻿import { glob } from "solid-styled-components";

(() => glob`
.Container-Root {
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(var(--theme-spacing) * 2px);
    padding-right: calc(var(--theme-spacing) * 2px);
}

@media (min-width:600px) {
    .Container-Root {
        padding-left: calc(var(--theme-spacing) * 3px);
        padding-right: calc(var(--theme-spacing) * 3px);
    }
}

@media (min-width:960px) {
    .Container-Root {
        padding-left: calc(var(--theme-spacing) * 4px);
        padding-right: calc(var(--theme-spacing) * 4px);
    }
}

.Container-DisableGutters {
    padding-left: 0;
    padding-right: 0;
}

@media (min-width:600px) {
    .Container-Fixed {
        max-width: calc(var(--theme-breakpoints-values-sm) * 1px);
    }
}

@media (min-width:960px) {
    .Container-Fixed {
        max-width: calc(var(--theme-breakpoints-values-md) * 1px);
    }
}

@media (min-width:1280px) {
    .Container-Fixed {
        max-width: calc(var(--theme-breakpoints-values-lg) * 1px);
    }
}

@media (min-width:1920px) {
    .Container-Fixed {
        max-width: calc(var(--theme-breakpoints-values-xl) * 1px);
    }
}

@media (min-width:0px) {
    .Container-MaxWidth-ExtraSmall {
        max-width: 444px;
    }
}

@media (min-width:600px) {
    .Container-MaxWidth-Small {
        max-width: calc(var(--theme-breakpoints-values-sm) * 1px);
    }
}

@media (min-width:960px) {
    .Container-MaxWidth-Medium {
        max-width: calc(var(--theme-breakpoints-values-md) * 1px);
    }
}

@media (min-width:1280px) {
    .Container-MaxWidth-Large {
        max-width: calc(var(--theme-breakpoints-values-lg) * 1px);
    }
}

@media (min-width:1920px) {
    .Container-MaxWidth-ExtraLarge {
        max-width: calc(var(--theme-breakpoints-values-xl) * 1px);
    }
}
`)();