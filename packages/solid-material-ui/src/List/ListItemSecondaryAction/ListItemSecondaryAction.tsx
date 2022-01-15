import { JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { ListItemContext } from "../ListItem/ListItemContext";

import "./ListItemSecondaryActionStyle";

interface IListItemSecondaryActionOptional extends IComponentBaseProps {}

interface IListItemSecondaryActionRequired {
  children: JSX.Element;
}

type IListItemSecondaryActionAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IListItemSecondaryActionArguments =
  Optional<IListItemSecondaryActionOptional> &
    Optional<IListItemSecondaryActionRequired>;

export type IListItemSecondaryActionProps = Partial<
  Optional<IListItemSecondaryActionOptional>
> &
  IListItemSecondaryActionRequired &
  IListItemSecondaryActionAttributes;

const defaults: IListItemSecondaryActionArguments = {
  selector: "ListItemSecondaryAction",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  children: undefined,
};

export function ListItemSecondaryAction(
  args: IListItemSecondaryActionProps
): JSX.Element {
  const componentContext = useComponentContext();
  const listItemContext = useContext(ListItemContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled ?? listItemContext?.disabled;

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
