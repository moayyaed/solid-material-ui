import { glob } from "solid-styled-components";

(() => glob`
.SvgIcon-Root {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 24rem);
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
}

.SvgIcon-Color-Primary {
    color: var(--theme-palette-primary-main);
}

.SvgIcon-Color-Secondary {
    color: var(--theme-palette-secondary-main);
}

.SvgIcon-Color-Action {
    color: var(--theme-palette-action-active);
}

.SvgIcon-Color-Disabled {
    color: var(--theme-palette-action-disabled);
}

.SvgIcon-Color-Error {
    color: var(--theme-palette-error-main);
}

.SvgIcon-FontSize-Inherit {
    font-size: inherit;
}

.SvgIcon-FontSize-Small {
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 20rem);
}

.SvgIcon-FontSize-Large {
    font-size: calc(var(--theme-font-size-rem-factor, 0.0625) * 35rem);
}
`)();
