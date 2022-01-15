import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Fade } from "../../Transition";

import "./BackdropStyle";

interface IBackdropOptional extends IComponentBaseProps {
  open: boolean;
  invisible: boolean;
  transitionDuration: number;
  appearTransitionDuration: number;
  enterTransitionDuration: number;
  exitTransitionDuration: number;
  children: JSX.Element;
}

interface IBackdropRequired {
}

type IBackdropAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IBackdropArguments = Optional<IBackdropOptional> &
  Optional<IBackdropRequired>;

export type IBackdropProps = Partial<Optional<IBackdropOptional>> &
  IBackdropRequired &
  IBackdropAttributes;

const defaults: IBackdropArguments = {
  selector: "Backdrop",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  open: undefined,
  invisible: undefined,
  transitionDuration: undefined,
  appearTransitionDuration: undefined,
  enterTransitionDuration: undefined,
  exitTransitionDuration: undefined,
  children: undefined,
};

export function Backdrop(args: IBackdropProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.invisible) yield "Invisible";
    },
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

  return (
    <Fade
      disabled={props.disabled}
      class={_class()}
      style={_style()}
      in={props.open}
      timeout={props.transitionDuration}
      appearTimeout={props.appearTransitionDuration}
      enterTimeout={props.enterTransitionDuration}
      exitTimeout={props.exitTransitionDuration}
    >
      {(context) => (
        <Dynamic
          {...others}
          component={_component()}
          ref={context.ref}
          class={context.class}
          style={context.style}
          data-mui-test="Backdrop"
          aria-hidden
        >
          {props.children}
        </Dynamic>
      )}
    </Fade>
  );
}
