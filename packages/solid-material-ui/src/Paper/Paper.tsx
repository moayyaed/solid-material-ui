import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import "./PaperStyle";

interface IPaperOptional extends IComponentBaseProps {
  elevation: number;
  square: boolean;
}

interface IPaperRequired {
  children: JSX.Element;
}

type IPaperAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IPaperArguments = Optional<IPaperOptional> & Optional<IPaperRequired>;

export type IPaperProps = Partial<Optional<IPaperOptional>> &
  IPaperRequired &
  IPaperAttributes;

const defaults: IPaperArguments = {
  selector: "Paper",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  elevation: 1,
  square: false,
  children: undefined,
};

export function Paper(args: IPaperProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield `Elevation-${props.elevation}`;
      if (!props.square) yield "Rounded";
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
      children={props.children}
    />
  );
}
