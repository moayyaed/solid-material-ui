import type { JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useProps } from "../../Core";

import { ITransitionContext } from "../Transition/TransitionContext";

import { Transition, TransitionState } from "../Transition";

interface IGrowOptional extends IComponentBaseProps {
  name: string;
  in: boolean;
  appear: boolean;
  enter: boolean;
  exit: boolean;
  mountOnEnter: boolean;
  unMountOnExit: boolean;
  optimized: boolean;
  timeout: number;
  appearTimeout: number;
  enterTimeout: number;
  exitTimeout: number;
  onEnter: (ref: HTMLElement, appearing: boolean) => void;
  onEntering: (ref: HTMLElement, appearing: boolean) => void;
  onEntered: (ref: HTMLElement, appearing: boolean) => void;
  onExit: (ref: HTMLElement) => void;
  onExiting: (ref: HTMLElement) => void;
  onExited: (ref: HTMLElement) => void;
  eventOnly: boolean;
  transitionDelay: number;
  transitionDuration: number;
}

interface IGrowRequired {
  children: (context: ITransitionContext) => JSX.Element;
}

type IGrowAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IGrowArguments = Optional<IGrowOptional> & Optional<IGrowRequired>;

export type IGrowProps = Partial<Optional<IGrowOptional>> &
  IGrowRequired &
  IGrowAttributes;

const defaults: Partial<IGrowArguments> = {
  children: undefined,
  transitionDuration: undefined,
  transitionDelay: 0,
  enterTimeout: undefined,
  exitTimeout: undefined,
  timeout: 225,
  appear: true,
};

export function Grow(args: IGrowProps): JSX.Element {
  const [props, others] = useProps(args, defaults);

  const toTransition = (
    action: string,
    duration: number,
    delay: number
  ): string =>
    `${action} ${duration}ms cubic-bezier(0.4, 0, 0.6, 1) ${delay}ms`;

  const toScale = (value: number): string =>
    `scale(${value}, ${Math.pow(value, 2)})`;

  const toGrowTransition = (duration: number, delay: number): string => {
    const opacity = toTransition("opacity", duration, delay);
    const transform = toTransition("transform", duration * 0.666, delay);
    return `${opacity},${transform}`;
  };

  const toEnteringStyle = (): JSX.CSSProperties => ({
    opacity: 1,
    visibility: "initial",
    transform: toScale(1),
    transition: toGrowTransition(
      props.transitionDuration ?? props.enterTimeout ?? props.timeout!,
      props.transitionDelay!
    ),
  });

  const toEnteredStyle = (): JSX.CSSProperties => ({
    transform: "none",
  });

  const toExitingStyle = (): JSX.CSSProperties => ({
    opacity: 0,
    transform: toScale(0.75),
    transition: toGrowTransition(
      props.transitionDuration ?? props.exitTimeout ?? props.timeout!,
      props.transitionDelay!
    ),
  });

  const toExitedStyle = (): JSX.CSSProperties => ({
    visibility: "hidden",
  });

  const stateStyles = {
    [TransitionState.Entering.toString()]: toEnteringStyle,
    [TransitionState.Entered.toString()]: toEnteredStyle,
    [TransitionState.Exiting.toString()]: toExitingStyle,
    [TransitionState.Exited.toString()]: toExitedStyle,
  };

  const transitionStyle = {};

  return (
    <Transition
      name="Grow"
      {...others}
      appear={props.appear}
      enterTimeout={props.enterTimeout}
      exitTimeout={props.exitTimeout}
      timeout={props.timeout}
    >
      {(context) =>
        props.children?.({
          get ref() {
            return context.ref;
          },
          get class() {
            return context.class;
          },
          get style() {
            return {
              ...context.style,
              ...Object.assign(
                transitionStyle,
                stateStyles[context.state.toString()]?.()
              ),
            };
          },
          get state() {
            return context.state;
          },
          get disabled() {
            return context.disabled;
          },
        })
      }
    </Transition>
  );
}
