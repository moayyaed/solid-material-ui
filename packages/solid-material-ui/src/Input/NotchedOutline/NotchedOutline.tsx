import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import "./NotchedOutlineStyle";

interface INotchedOutlineOptional extends IComponentBaseProps {
  notched: boolean;
  labelWidth: number;
  legendClass: string;
  legendStyle: JSX.CSSProperties;
}

interface INotchedOutlineRequired {}

type INotchedOutlineAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type INotchedOutlineArguments = Optional<INotchedOutlineOptional> &
  Optional<INotchedOutlineRequired>;

export type INotchedOutlineProps = Partial<Optional<INotchedOutlineOptional>> &
  INotchedOutlineRequired &
  INotchedOutlineAttributes;

const defaults: INotchedOutlineArguments = {
  selector: "NotchedOutline",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "fieldset",
  notched: undefined,
  labelWidth: undefined,
  legendClass: undefined,
  legendStyle: undefined,
};

export function NotchedOutline(args: INotchedOutlineProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _labelWidth = () =>
    props.labelWidth! > 0 ? props.labelWidth! * 0.75 + 8 : 0;

  const _paddingLeft = () => `${8 + (props.notched ? 0 : _labelWidth() / 2)}px`;

  const _legendWidth = () => `${props.notched ? _labelWidth() : 0.01}px`;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
    },
    *class() {
      yield props.class;
      yield props.className;
      yield componentContext?.class;
    },
  });

  const _style = toStyle({
    *property() {
      yield ["padding-left", _paddingLeft()];
    },
    *style() {
      yield props.style;
      yield componentContext?.style;
    },
  });

  const _legendClass = toClass({
    section: "Legend",
    include: true,
    *class() {
      yield props.legendClass;
    },
  });

  const _legendStyle = toStyle({
    *property() {
      yield ["width", _legendWidth()];
    },
    *style() {
      yield props.legendStyle;
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
      aria-hidden
    >
      <legend class={_legendClass()} style={_legendStyle()}>
        <span>&#8203;</span>
      </legend>
    </Dynamic>
  );
}
