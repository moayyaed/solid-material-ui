import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { ToolbarVariant } from "./ToolbarVariant";

import "./ToolbarStyle";

interface IToolbarOptional extends IComponentBaseProps {
  disableGutters: boolean;
  variant: ToolbarVariant;
}

interface IToolbarRequired {
  children: JSX.Element;
}

type IToolbarAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IToolbarArguments = Optional<IToolbarOptional> &
  Optional<IToolbarRequired>;

export type IToolbarProps = Partial<Optional<IToolbarOptional>> &
  IToolbarRequired &
  IToolbarAttributes;

const defaults: IToolbarArguments = {
  selector: "Toolbar",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  disableGutters: false,
  variant: ToolbarVariant.Regular,
  children: undefined,
};

export function Toolbar(args: IToolbarProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield `${props.variant}`;
      if (!props.disableGutters) yield "Gutters";
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
