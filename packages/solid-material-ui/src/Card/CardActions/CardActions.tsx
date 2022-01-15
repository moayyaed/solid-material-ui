import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import "./CardActionsStyle";

interface ICardActionsOptional extends IComponentBaseProps {
  disableSpacing: boolean;
}

interface ICardActionsRequired {
  children: JSX.Element;
}

type ICardActionsAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type ICardActionsArguments = Optional<ICardActionsOptional> & Optional<ICardActionsRequired>;

export type ICardActionsProps = Partial<Optional<ICardActionsOptional>> &
  ICardActionsRequired &
  ICardActionsAttributes;

const defaults: ICardActionsArguments = {
  selector: "CardActions",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  disableSpacing: undefined,
  children: undefined,
};

export function CardActions(args: ICardActionsProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (props.disabled) yield "Disabled";
      if (!props.disableSpacing) yield "Spacing";
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
