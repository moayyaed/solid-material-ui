import {
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  Show,
  useContext,
} from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { TransitionState } from "./TransitionState";
import { ITransitionContext } from "./TransitionContext";

interface ITransitionOptional extends IComponentBaseProps {
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
}

interface ITransitionRequired {
  children: (context: ITransitionContext) => JSX.Element;
}

type ITransitionAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type ITransitionArguments = Optional<ITransitionOptional> &
  Optional<ITransitionRequired>;

export type ITransitionProps = Partial<Optional<ITransitionOptional>> &
  ITransitionRequired &
  ITransitionAttributes;

const defaults: ITransitionArguments = {
  selector: "Transition",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  name: undefined,
  in: undefined,
  appear: undefined,
  enter: undefined,
  exit: undefined,
  mountOnEnter: undefined,
  unMountOnExit: undefined,
  optimized: undefined,
  timeout: undefined,
  appearTimeout: undefined,
  enterTimeout: undefined,
  exitTimeout: undefined,
  onEnter: undefined,
  onEntering: undefined,
  onEntered: undefined,
  onExit: undefined,
  onExiting: undefined,
  onExited: undefined,
  eventOnly: undefined,
  children: undefined,
};

export function Transition(args: ITransitionProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, _] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const [_current, setCurrent] = createSignal(TransitionState.None);
  const [_next, setNext] = createSignal(TransitionState.None);

  let initialized = false;
  const appear = props.appear;
  let initial: TransitionState = TransitionState.None;

  const timeoutAppear = () =>
    props.appearTimeout ?? props.enterTimeout ?? props.timeout;

  const timeoutEnter = () => props.enterTimeout ?? props.timeout;

  const timeoutExit = () => props.exitTimeout ?? props.timeout;

  let mounted: boolean | undefined;
  onMount(() => {
    mounted = true;
    updateState(true, _current(), _next());
  });

  let next: TransitionState = TransitionState.None;
  let current: TransitionState = TransitionState.None;

  createEffect(() => {
    if (!initialized) {
      initialized = true;
      if (props.in) {
        if (appear) {
          initial = TransitionState.Exited;
          next = TransitionState.Entering;
        } else {
          initial = TransitionState.Entered;
        }
      } else if (props.unMountOnExit || props.mountOnEnter) {
        initial = TransitionState.Unmounted;
      } else {
        initial = TransitionState.Exited;
      }
      current = initial;
    } else {
      if (props.in) {
        if ((current as TransitionState) === TransitionState.Unmounted) {
          current = TransitionState.Exited;
        }
      }
      if (props.in) {
        if (
          (current as TransitionState) !== TransitionState.Entering &&
          (current as TransitionState) !== TransitionState.Entered
        ) {
          next = TransitionState.Entering;
        }
      } else if (current === TransitionState.Exited) {
        next = TransitionState.None;
      } else if (
        (current as TransitionState) === TransitionState.Entering ||
        (current as TransitionState) === TransitionState.Entered
      ) {
        next = TransitionState.Exiting;
      }
    }

    setCurrent(current);
    setNext(next);

    // if (mounted && props.optimized) {
    //   updateState(false, current, next);
    // }

    // after rendering
    updateState(false, current, next);
  });

  function updateState(
    mounting: boolean,
    current: TransitionState,
    next: TransitionState
  ) {
    if (next !== TransitionState.None) {
      // Next will always be ENTERING or EXITING.
      if (next === TransitionState.Entering) {
        performEnter(mounting);
      } else {
        performExit();
      }
    } else if (props.unMountOnExit && current === TransitionState.Exited) {
      current = TransitionState.Unmounted;
      setCurrent(TransitionState.Unmounted);
    }
  }

  function performEnter(mounting: boolean) {
    const appearing = mounting;
    if (!mounting && !(props.enter ?? true)) {
      current = TransitionState.Entered;
      setCurrent(TransitionState.Entered);
      next = TransitionState.None;
      setNext(TransitionState.None);
      props.onEntered?.(_ref!, appearing);
      return;
    }

    current = TransitionState.Enter;
    setCurrent(TransitionState.Enter);
    props.onEnter?.(_ref!, appearing);

    current = TransitionState.Entering;
    setCurrent(TransitionState.Entering);
    props.onEntering?.(_ref!, appearing);

    const id = setTimeout(
      () => {
        current = TransitionState.Entered;
        setCurrent(TransitionState.Entered);
        next = TransitionState.None;
        setNext(TransitionState.None);
        props.onEntered?.(_ref!, appearing);
      },
      appearing ? timeoutAppear() : timeoutEnter()
    );
    onCleanup(() => clearTimeout(id));
  }

  function performExit() {
    if (!(props.exit ?? true)) {
      current = TransitionState.Exited;
      setCurrent(TransitionState.Exited);
      next = TransitionState.None;
      setNext(TransitionState.None);
      props.onExited?.(_ref!);
      return;
    }

    current = TransitionState.Exit;
    setCurrent(TransitionState.Exit);
    props.onExit?.(_ref!);

    current = TransitionState.Exiting;
    setCurrent(TransitionState.Exiting);
    props.onExiting?.(_ref!);

    const id = setTimeout(() => {
      current = TransitionState.Exited;
      setCurrent(TransitionState.Exited);
      next = TransitionState.None;
      setNext(TransitionState.None);
      props.onExited?.(_ref!);
    }, timeoutExit());
    onCleanup(() => clearTimeout(id));
  }

  const _class = toClass({
    *class() {
      yield props.class;
      yield props.className;
      yield componentContext?.class;
    },
  });

  const _style = toStyle({
    *style() {
      yield props.style;
      yield componentContext?.style;
    },
  });

  let _ref: HTMLElement | undefined;

  const _handleRef = (ref: HTMLElement | undefined) => {
    _ref = ref;
    props.ref?.(ref);
  };

  const context: ITransitionContext = {
    get ref() {
      return _handleRef;
    },
    get class() {
      return _class();
    },
    get style() {
      return _style();
    },
    get state() {
      return _current();
    },
    get disabled() {
      return _disabled();
    },
  };

  return (
    <Show when={_current() !== TransitionState.Unmounted}>
      {/* <TransitionContext.Provider value={context}> */}
      {props.children?.(context)}
      {/* </TransitionContext.Provider> */}
    </Show>
  );
}
