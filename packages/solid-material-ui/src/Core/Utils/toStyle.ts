import { createMemo, JSX } from "solid-js";

export interface IStyleArgs {
    style?: () => Generator<JSX.CSSProperties | undefined, void, unknown>,
    property?: () => Generator<[string, any], void, unknown>,
}

export function toStyle(args: IStyleArgs): () => JSX.CSSProperties {
    return createMemo(() => {
        const style: JSX.CSSProperties = {};
        if (args.style) {
            for (const styl of args.style()) {
                Object.assign(style, { ...styl });
            }
        }
        if (args.property) {
            for (const [prop, value] of args.property()) {
                Object.assign(style, { [prop]: value });
            }
        }
        return style;
    });
}