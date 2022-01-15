import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import "./CardContentStyle";

interface ICardContentOptional extends IComponentBaseProps {}

interface ICardContentRequired {
  children: JSX.Element;
}

type ICardContentAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type ICardContentArguments = Optional<ICardContentOptional> &
  Optional<ICardContentRequired>;

export type ICardContentProps = Partial<Optional<ICardContentOptional>> &
  ICardContentRequired &
  ICardContentAttributes;

const defaults: ICardContentArguments = {
  selector: "CardContent",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  children: undefined,
};

export function CardContent(args: ICardContentProps): JSX.Element {
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
