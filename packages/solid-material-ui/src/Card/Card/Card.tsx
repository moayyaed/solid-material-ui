import type { JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Paper } from "../../Paper";

import "./CardStyle";

interface ICardOptional extends IComponentBaseProps {
  elevatoin: number;
  square: boolean;
  raised: boolean;
}

interface ICardRequired {
  children: JSX.Element;
}

type ICardAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type ICardArguments = Optional<ICardOptional> & Optional<ICardRequired>;

export type ICardProps = Partial<Optional<ICardOptional>> &
  ICardRequired &
  ICardAttributes;

const defaults: ICardArguments = {
  selector: "Card",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  elevatoin: 1,
  square: undefined,
  raised: undefined,
  children: undefined,
};

export function Card(args: ICardProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _elevation = () => (props.raised ? 8 : props.elevatoin);

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
    <Paper
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      elevation={_elevation()}
      square={props.square}
    >
      {props.children}
    </Paper>
  );
}
