import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { MaxWidth } from "../Core";

import "./ContainerStyle";

interface IContainerOptional extends IComponentBaseProps {
  fixed: boolean;
  maxWidth: MaxWidth;
  disableGutters: boolean;
}

interface IContainerRequired {
  children: JSX.Element;
}

type IContainerAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IContainerArguments = Optional<IContainerOptional> &
  Optional<IContainerRequired>;

export type IContainerProps = Partial<Optional<IContainerOptional>> &
  IContainerRequired &
  IContainerAttributes;

const defaults: IContainerArguments = {
  selector: "Container",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  fixed: false,
  maxWidth: MaxWidth.Large,
  disableGutters: false,
  children: undefined,
};

export function Container(args: IContainerProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.fixed) yield "Fixed";
      if (props.disableGutters) yield "DisableGutters";
      if (props.maxWidth !== MaxWidth.False) yield `MaxWith-${props.maxWidth}`;
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
    >
      {props.children}
    </Dynamic>
  );
}
