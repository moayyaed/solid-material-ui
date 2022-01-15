import { JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { AlignItems } from "../../Core";

import { ListItemContext } from "../ListItem/ListItemContext";

import "./ListItemAvatarStyle";

interface IListItemAvatarOptional extends IComponentBaseProps {}

interface IListItemAvatarRequired {
  children: JSX.Element;
}

type IListItemAvatarAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IListItemAvatarArguments = Optional<IListItemAvatarOptional> &
  Optional<IListItemAvatarRequired>;

export type IListItemAvatarProps = Partial<Optional<IListItemAvatarOptional>> &
  IListItemAvatarRequired &
  IListItemAvatarAttributes;

const defaults: IListItemAvatarArguments = {
  selector: "ListItemAvatar",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  children: undefined,
};

export function ListItemAvatar(args: IListItemAvatarProps): JSX.Element {
  const componentContext = useComponentContext();
  const listItemContext = useContext(ListItemContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () =>
    props.disabled ?? componentContext?.disabled ?? listItemContext?.disabled;

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
