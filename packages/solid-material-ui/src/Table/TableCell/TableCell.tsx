import { JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Align, Portion, Size, Sort, Padding } from "../../Core";

import { TableContext } from "../Table/TableContext";

import { TableContentContext } from "../Table/TableContentContext";

import "./TableCellStyle";

interface ITableCellOptional extends IComponentBaseProps {
  scope: string;
  align: Align;
  portion: Portion;
  size: Size;
  sort: Sort;
  padding: Padding;
}

interface ITableCellRequired {
  children: JSX.Element;
}

type ITableCellAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type ITableCellArguments = Optional<ITableCellOptional> &
  Optional<ITableCellRequired>;

export type ITableCellProps = Partial<Optional<ITableCellOptional>> &
  ITableCellRequired &
  ITableCellAttributes;

const defaults: ITableCellArguments = {
  selector: "TableCell",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: undefined,
  scope: undefined,
  align: Align.Inherit,
  portion: undefined,
  size: undefined,
  sort: Sort.None,
  padding: undefined,
  children: undefined,
};

export function TableCell(args: ITableCellProps): JSX.Element {
  const componentContext = useComponentContext();
  const tableContext = useContext(TableContext);
  const tableContentContext = useContext(TableContentContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () =>
    props.component ??
    (tableContentContext?.portion === Portion.Head ? "th" : "td");

  const _ariaSort = () => props.sort?.toString();

  const _scope = () =>
    props.scope === undefined && tableContentContext?.portion === Portion.Head
      ? "col"
      : props.scope;

  const _size = () =>
    props.size === undefined ? tableContext.size ?? Size.Medium : props.size;

  const _padding = () =>
    props.padding === undefined
      ? tableContext?.padding ?? Padding.Default
      : props.padding;

  const _portion = () =>
    props.portion === undefined ? tableContentContext?.portion : props.portion;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield `${_portion()}`;
      if (_portion() === Portion.Head && tableContext?.stickyHeader)
        yield "StickyHeader";
      if (props.align !== Align.Inherit) yield `Align-${props.align}`;
      if (_padding() !== Padding.Default) yield `Padding-${_padding()}`;
      if (_size() !== Size.Medium) yield `Size-${_size()}`;
    },
    *class() {
      yield props.class;
      yield props.className;
    },
  });

  const _style = toStyle({
    *style() {
      yield props.style;
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
      aria-sort={_ariaSort()}
      scope={_scope()}
    >
      {props.children}
    </Dynamic>
  );
}
