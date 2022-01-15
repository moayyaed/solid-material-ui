import { JSX, Show } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Sort } from "../../Core";

import { ButtonBase } from "../../Button";

import { ArrowDownwardIcon } from "../../Icons";

import "./TableSortLabelStyle";

interface ITableSortLabelOptional extends IComponentBaseProps {
  active: boolean;
  hideSortIcon: boolean;
  direction: Sort;
  iconClass: string;
  iconStyle: JSX.CSSProperties;
}

interface ITableSortLabelRequired {
  children: JSX.Element;
}

type ITableSortLabelAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type ITableSortLabelArguments = Optional<ITableSortLabelOptional> & Optional<ITableSortLabelRequired>;

export type ITableSortLabelProps = Partial<Optional<ITableSortLabelOptional>> &
  ITableSortLabelRequired &
  ITableSortLabelAttributes;

const defaults: ITableSortLabelArguments = {
  selector: "TableSortLabel",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "span",
  active: false,
  hideSortIcon: false,
  direction: Sort.Descending,
  iconClass: undefined,
  iconStyle: undefined,
  children: undefined,
};

export function TableSortLabel(args: ITableSortLabelProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.active) yield "Active";
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

  const _iconClass = toClass({
    section: "Icon",
    include: true,
    *append() {
      if (props.direction !== Sort.None) yield `Direction-${props.direction}`;
    },
    *class() {
      yield props.iconClass;
    },
  });

  const _iconStyle = toStyle({
    *style() {
      yield props.iconStyle;
    },
  });

  return (
    <ButtonBase
      {...(others as any)}
      component={props.component}
      disabled={props.disabled}
      class={_class()}
      style={_style()}
      disableRipple
    >
      {(context) => (
        <>
          {props.children}

          <Show when={!props.hideSortIcon || props.active}>
            <ArrowDownwardIcon class={_iconClass()} style={_iconStyle()} />
          </Show>
        </>
      )}
    </ButtonBase>
  );
}
