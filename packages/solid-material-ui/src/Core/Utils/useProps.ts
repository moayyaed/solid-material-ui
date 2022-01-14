import { mergeProps, splitProps } from "solid-js";
import { keys } from "./keys";

export function useProps<PR extends object, AR extends object, PA extends AR & PR>(args: PR, defaults: AR): [Pick<PA, keyof AR>, Omit<PA, keyof AR>] {
    const [props, others] = splitProps<AR & PR, keyof AR>(
        mergeProps(defaults, args),
        keys(defaults)
    );

    return [props, others] as any;
}