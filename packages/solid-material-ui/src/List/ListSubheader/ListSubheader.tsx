import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color } from "../../Core";

import "./ListSubheaderStyle";

interface IListSubheaderOptional extends IComponentBaseProps {
  color: Color;
  disableGutters: boolean;
  disableSticky: boolean;
  inset: boolean;
  children: JSX.Element;
}

interface IListSubheaderRequired {
}

type IListSubheaderAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IListSubheaderArguments = Optional<IListSubheaderOptional> &
  Optional<IListSubheaderRequired>;

export type IListSubheaderProps = Partial<Optional<IListSubheaderOptional>> &
  IListSubheaderRequired &
  IListSubheaderAttributes;

const defaults: IListSubheaderArguments = {
  selector: "ListSubheader",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "li",
  color: Color.Default,
  disableGutters: undefined,
  disableSticky: undefined,
  inset: undefined,
  children: undefined,
};

export function ListSubheader(args: IListSubheaderProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.color !== Color.Default) yield `Color-${props.color}`;
      if (!props.disableSticky) yield "Sticky";
      if (!props.disableGutters) yield "Gutters";
      if (props.inset) yield "Inset";
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
