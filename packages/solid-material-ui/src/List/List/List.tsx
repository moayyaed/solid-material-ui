import { createMemo, JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { IListContext, ListContext } from "./ListContext";

import "./ListStyle";

interface IListOptional extends IComponentBaseProps {
  dense: boolean;
  disablePadding: boolean;
  subheader: JSX.Element;
}

interface IListRequired {
  children: JSX.Element;
}

type IListAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IListArguments = Optional<IListOptional> & Optional<IListRequired>;

export type IListProps = Partial<Optional<IListOptional>> &
  IListRequired &
  IListAttributes;

const defaults: IListArguments = {
  selector: "List",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "ul",
  dense: false,
  disablePadding: false,
  subheader: undefined,
  children: undefined,
};

export function List(args: IListProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.dense) yield "Dense";
      if (!props.disablePadding) yield "Padding";
      if (props.subheader) yield "Subheader";
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

  const _listItemContext = createMemo(
    () =>
      ({
        get class() {
          return _class();
        },
        get style() {
          return _style();
        },
        get disabled() {
          return props.disabled;
        },
        get dense() {
          return props.dense;
        },
      } as IListContext)
  );

  return (
    <Dynamic
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
    >
      <ListContext.Provider value={_listItemContext()}>
        {props.children}
      </ListContext.Provider>
    </Dynamic>
  );
}
