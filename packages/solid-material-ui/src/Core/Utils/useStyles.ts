import { css, CSSAttribute } from "solid-styled-components";

export function useStyles<T extends { [key: string]: CSSAttribute | string }>(styles: T): { [P in keyof T]: string } {
    return Object.entries(styles).reduce((classes, [name, style]) => {
        return { ...classes, [name]: css(style) };
    }, {}) as any;
}