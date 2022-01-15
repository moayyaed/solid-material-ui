import { createContext } from "solid-js";
import { IComponentContext } from "../../Core";
import { TransitionState } from "./TransitionState";

export interface ITransitionContext extends IComponentContext {
    state: TransitionState;
}

export const TransitionContext = createContext<Partial<ITransitionContext>>({});
