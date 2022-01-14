import type { JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { Color } from "../Core";

import { Paper } from "../Paper";

import { AppBarPosition } from "./AppBarPosition";

import "./AppBarStyle";

interface IAppBarOptional extends IComponentBaseProps {
  elevation: number;
  square: boolean;
  color: Color;
  position: AppBarPosition;
}

interface IAppBarRequired {
  children: JSX.Element;
}

type IAppBarAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IAppBarArguments = Optional<IAppBarOptional> & Optional<IAppBarRequired>;

export type IAppBarProps = Partial<Optional<IAppBarOptional>> &
  IAppBarRequired &
  IAppBarAttributes;

const defaults: IAppBarArguments = {
  selector: "AppBar",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "header",
  elevation: 4,
  square: true,
  color: Color.Primary,
  position: AppBarPosition.Fixed,
  children: undefined,
};

export function AppBar(args: IAppBarProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield `Position-${props.position}`;
      if (props.color !== Color.Inherit) yield `Color-${props.color}`;
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
      elevation={props.elevation}
      square={props.square}
    >
      {props.children}
    </Paper>
  );
}
