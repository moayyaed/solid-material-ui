import { createMemo, JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Portion } from "../../Core";

import {
  ITableContentContext,
  TableContentContext,
} from "../Table/TableContentContext";

import "./TableHeadStyle";

interface ITableHeadOptional extends IComponentBaseProps {
}

interface ITableHeadRequired {
  children: JSX.Element;
}

type ITableHeadAttributes = Omit<JSX.HTMLAttributes<HTMLTableSectionElement>, "children">;

type ITableHeadArguments = Optional<ITableHeadOptional> & Optional<ITableHeadRequired>;

export type ITableHeadProps = Partial<Optional<ITableHeadOptional>> &
  ITableHeadRequired &
  ITableHeadAttributes;

const defaults: ITableHeadArguments = {
  selector: "TableHead",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "thead",
  children: undefined,
};

export function TableHead(args: ITableHeadProps): JSX.Element {
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
      yield componentContext?.class;
    },
  });

  const _style = toStyle({
    *style() {
      yield props.style;
      yield componentContext?.style;
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
        return Portion.Head;
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
