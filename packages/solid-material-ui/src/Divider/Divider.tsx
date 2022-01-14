import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { Orientation } from "../Core";

import { DividerVariant } from "./DividerVariant";

import "./DividerStyle";

interface IDividerOptional extends IComponentBaseProps {
  role: string;
  absolute: boolean;
  variant: DividerVariant;
  light: boolean;
  orientation: Orientation;
  children: JSX.Element;
}

interface IDividerRequired {
}

type IDividerAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IDividerArguments = Optional<IDividerOptional> & Optional<IDividerRequired>;

export type IDividerProps = Partial<Optional<IDividerOptional>> &
  IDividerRequired &
  IDividerAttributes;

const defaults: IDividerArguments = {
  selector: "Divider",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "hr",
  absolute: false,
  variant: DividerVariant.FullWidth,
  light: false,
  orientation: Orientation.Horizontal,
  role: undefined,
  children: undefined,
};

export function Divider(args: IDividerProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _role = () =>
    props.role ?? props.component !== "hr" ? "separator" : "";

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.absolute) yield "Absolute";
      if (props.variant !== DividerVariant.FullWidth)
        yield `${props.variant}`;
      if (props.orientation === Orientation.Vertical)
        yield `${props.orientation}`;
      if (props.light) yield "Light";
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
      role={_role()}
    >
      {props.children}
    </Dynamic>
  );
}
