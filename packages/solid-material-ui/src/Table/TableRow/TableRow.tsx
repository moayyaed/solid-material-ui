import { JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { TableContentContext } from "../Table/TableContentContext";

import "./TableRowStyle";

interface ITableRowOptional extends IComponentBaseProps {
  selected: boolean;
  hover: boolean;
}

interface ITableRowRequired {
  children: JSX.Element;
}

type ITableRowAttributes = Omit<
  JSX.HTMLAttributes<HTMLTableRowElement>,
  "children"
>;

type ITableRowArguments = Optional<ITableRowOptional> &
  Optional<ITableRowRequired>;

export type ITableRowProps = Partial<Optional<ITableRowOptional>> &
  ITableRowRequired &
  ITableRowAttributes;

const defaults: ITableRowArguments = {
  selector: "TableRow",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "tr",
  selected: false,
  hover: false,
  children: undefined,
};

export function TableRow(args: ITableRowProps): JSX.Element {
  const componentContext = useComponentContext();
  const tableContentContext = useContext(TableContentContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () =>
    props.disabled ??
    componentContext?.disabled ??
    tableContentContext.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (tableContentContext?.portion) yield `${tableContentContext?.portion}`;
      if (props.hover) yield "Hover";
      if (props.selected) yield "Selected";
    },
    *class() {
      yield props.class;
      yield props.className;
      yield tableContentContext?.class;
    },
  });

  const _style = toStyle({
    *style() {
      yield props.style;
      yield tableContentContext?.style;
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
