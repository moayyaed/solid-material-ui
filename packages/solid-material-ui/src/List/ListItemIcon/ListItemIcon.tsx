import { JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { AlignItems } from "../../Core";

import { ListItemContext } from "../ListItem/ListItemContext";

import "./ListItemIconStyle";

interface IListItemIconOptional extends IComponentBaseProps {
}

interface IListItemIconRequired {
  children: JSX.Element;
}

type IListItemIconAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IListItemIconArguments = Optional<IListItemIconOptional> & Optional<IListItemIconRequired>;

export type IListItemIconProps = Partial<Optional<IListItemIconOptional>> &
  IListItemIconRequired &
  IListItemIconAttributes;

const defaults: IListItemIconArguments = {
  selector: "ListItemIcon",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  children: undefined,
};

export function ListItemIcon(args: IListItemIconProps): JSX.Element {
  const componentContext = useComponentContext();
  const listItemContext = useContext(ListItemContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (listItemContext?.alignItems === AlignItems.FlexStart)
        yield `AlignItems-${listItemContext?.alignItems}`;
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
