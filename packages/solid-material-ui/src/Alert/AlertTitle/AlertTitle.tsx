import type { JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Typography } from "../../Typography";

import "./AlertTitleStyle";

interface IAlertTitleOptional extends IComponentBaseProps {}

interface IAlertTitleRequired {
  children: JSX.Element;
}

type IAlertTitleAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IAlertTitleArguments = Optional<IAlertTitleOptional> &
  Optional<IAlertTitleRequired>;

export type IAlertTitleProps = Partial<Optional<IAlertTitleOptional>> &
  IAlertTitleRequired &
  IAlertTitleAttributes;

const defaults: IAlertTitleArguments = {
  selector: "AlertTitle",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  children: undefined,
};

export function AlertTitle(args: IAlertTitleProps): JSX.Element {
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
    <Typography
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}
