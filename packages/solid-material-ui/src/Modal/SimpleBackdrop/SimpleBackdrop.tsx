import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import "./SimpleBackdropStyle";

interface ISimpleBackdropOptional extends IComponentBaseProps {
  open: boolean;
  invisible: boolean;
}

interface ISimpleBackdropRequired {
  children: JSX.Element;
}

type ISimpleBackdropAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type ISimpleBackdropArguments = Optional<ISimpleBackdropOptional> &
  Optional<ISimpleBackdropRequired>;

export type ISimpleBackdropProps = Partial<Optional<ISimpleBackdropOptional>> &
  ISimpleBackdropRequired &
  ISimpleBackdropAttributes;

const defaults: ISimpleBackdropArguments = {
  selector: "SimpleBackdrop",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  open: undefined,
  invisible: undefined,
  children: undefined,
};

export function SimpleBackdrop(args: ISimpleBackdropProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (props.disabled) yield "Disabled";
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
    <Dynamic
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      data-mui-test="Backdrop"
      aria-hidden
    >
      {props.children}
    </Dynamic>
  );
}
