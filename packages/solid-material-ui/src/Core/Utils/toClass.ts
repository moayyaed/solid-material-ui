import { createMemo } from "solid-js";

export interface IClassArgs {
    selector?: string;
    extendor?: string;
    include?: boolean;
    class?: () => Generator<string | undefined, void, unknown>,
    append?: () => Generator<string, void, unknown>,
}

export function toClass(
    args: IClassArgs
): () => string {
    return createMemo(() => {
        const classes: string[] = [];
        if (args.append) {
            for (const value of args.append()) {
                classes.push(value);
            }
        }
        const selector = args.selector;
        const extendor = args.extendor;

        const xclazzes = classes.map((key) => {
            if (key && key.startsWith("~")) {
                return key.substring(1);
            }
            const currentKey = `${(key ? "-" : "")}${key}`;
            return extendor ? `${selector}${currentKey} ${extendor}${currentKey}` : `${selector}${currentKey}`;
        });

        if (args.class) {
            for (const value of args.class()) {
                if (value) {
                    xclazzes.push(value);
                }
            }
        }
        if (args.include) {
            if (extendor) {
                xclazzes.unshift(extendor);
            }
            if (selector) {
                xclazzes.unshift(selector);
            }
        }
        const clazz = xclazzes.filter(Boolean).join(" ");

        return clazz;
    });
}