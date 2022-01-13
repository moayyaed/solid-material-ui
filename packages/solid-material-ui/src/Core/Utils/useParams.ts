import { mergeProps, splitProps } from "solid-js";
import { keys } from "./keys";

export function useParams<PR extends object, AR extends object, PA extends AR & PR>(props: PR, defaults: AR): [Pick<PA, keyof AR>, Omit<PA, keyof AR>] {
    const [params, others] = splitProps<AR & PR, keyof AR>(
        mergeProps(defaults, props),
        keys(defaults)
    );

    return [params, others] as any;
}