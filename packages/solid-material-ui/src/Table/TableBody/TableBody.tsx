import { createMemo, JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Portion } from "../../Core";

import {
  ITableContentContext,
  TableContentContext,
} from "../Table/TableContentContext";

import "./TableBodyStyle";

interface ITableBodyOptional extends IComponentBaseProps {}

interface ITableBodyRequired {
  children: JSX.Element;
}

type ITableBodyAttributes = Omit<
  JSX.HTMLAttributes<HTMLTableSectionElement>,
  "children"
>;

type ITableBodyArguments = Optional<ITableBodyOptional> &
  Optional<ITableBodyRequired>;

export type ITableBodyProps = Partial<Optional<ITableBodyOptional>> &
  ITableBodyRequired &
  ITableBodyAttributes;

const defaults: ITableBodyArguments = {
  selector: "TableBody",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "tbody",
  children: undefined,
};

export function TableBody(args: ITableBodyProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
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

  const _tableContentContext = createMemo(() => {
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
      get portion() {
        return Portion.Body;
      },
    } as ITableContentContext;
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
      <TableContentContext.Provider value={_tableContentContext()}>
        {props.children}
      </TableContentContext.Provider>
    </Dynamic>
  );
}
