import { IClassArgs, toClass } from "./toClass";
import { IStyleArgs, toStyle } from "./toStyle";

export interface ICSSArgs {
    selector?: string;
    extendor?: string;
}

export type IClassLimitedArgs = Omit<IClassArgs, "selector" | "extendor"> & { section?: string };

export function useCSS(
    args: ICSSArgs
): { toClass: (args: IClassLimitedArgs) => () => string, toStyle: typeof toStyle } {
    return {
        toClass: (cargs: IClassLimitedArgs) => {
            return toClass({
                get selector() {
                    const { selector } = args;
                    const { section } = cargs;
                    if (selector && section) {
                        return `${selector}-${section}`;
                    }
                    return selector;
                },
                get extendor() {
                    const { extendor } = args;
                    const { section } = cargs;
                    if (extendor && section) {
                        return `${extendor}-${section}`;
                    }
                    return extendor;
                },
                get include() {
                    return cargs.include;
                },
                get class() {
                    return cargs.class;
                },
                get append() {
                    return cargs.append;
                }
            });
        },
        toStyle: (sargs: IStyleArgs) => {
            return toStyle(sargs);
        },
    };
}