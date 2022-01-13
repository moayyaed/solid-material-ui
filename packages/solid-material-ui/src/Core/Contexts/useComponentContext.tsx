import { useContext } from "solid-js";
import { ComponentContext, IComponentContext } from "./ComponentContext";

export function useComponentContext(): IComponentContext | undefined {
    return useContext(ComponentContext);
}