import { createMemo, JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Padding, Size } from "../../Core";

import { ITableContext, TableContext } from "./TableContext";

import "./TableStyle";

interface ITableOptional extends IComponentBaseProps {
  padding: Padding;
  size: Size;
  stickyHeader: boolean;
}

interface ITableRequired {
  children: JSX.Element;
}

type ITableAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type ITableArguments = Optional<ITableOptional> & Optional<ITableRequired>;

export type ITableProps = Partial<Optional<ITableOptional>> &
  ITableRequired &
  ITableAttributes;

const defaults: ITableArguments = {
  selector: "Table",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "table",
  padding: Padding.Default,
  size: Size.Medium,
  stickyHeader: false,
  children: undefined,
};

export function Table(args: ITableProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.stickyHeader) yield "StickyHeader";
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

  const _tableContext = createMemo(() => {
    return {
      get class() {
        return _class();
      },
      get style() {
        return _style();
      },
      get disabled() {
        return props.disabled;
      },
      get padding() {
        return props.padding;
      },
      get size() {
        return props.size;
      },
      get stickyHeader() {
        return props.stickyHeader;
      },
    } as ITableContext;
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
      <TableContext.Provider value={_tableContext()}>
        {props.children}
      </TableContext.Provider>
    </Dynamic>
  );
}
