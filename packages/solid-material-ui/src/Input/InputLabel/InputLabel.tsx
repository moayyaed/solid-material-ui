import { Component, JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Margin, ControlVariant } from "../../Core";

import { FormLabel, FormControlContext } from "../../Form";

import "./InputLabelStyle";

interface IInputLabelOptional extends IComponentBaseProps {
  filled: boolean;
  focused: boolean;
  required: boolean;
  error: boolean;
  hiddenLabel: boolean;
  margin: Margin;
  variant: ControlVariant;
  component: Component<any> | string | keyof JSX.IntrinsicElements;
  hasStartAdornment: boolean;
  hasEndAdornment: boolean;
  disableAnimation: boolean;
  shrink: boolean;
  for: string;
}

interface IInputLabelRequired {
  children: JSX.Element;
}

type IInputLabelAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IInputLabelArguments = Optional<IInputLabelOptional> &
  Optional<IInputLabelRequired>;

export type IInputLabelProps = Partial<Optional<IInputLabelOptional>> &
  IInputLabelRequired &
  IInputLabelAttributes;

const defaults: IInputLabelArguments = {
  selector: "InputLabel",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "label",
  filled: undefined,
  focused: undefined,
  required: undefined,
  error: undefined,
  hiddenLabel: undefined,
  margin: undefined,
  variant: undefined,
  hasStartAdornment: undefined,
  hasEndAdornment: undefined,
  for: undefined,
  disableAnimation: undefined,
  shrink: undefined,
  children: undefined,
};

export function InputLabel(args: IInputLabelProps): JSX.Element {
  const componentContext = useComponentContext();
  const formControlContext = useContext(FormControlContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _variant = () => props.variant ?? formControlContext?.variant;

  const _margin = () => props.margin ?? formControlContext?.margin;

  const _error = () => props.error ?? formControlContext?.error;

  const _focused = () => props.focused ?? formControlContext?.focused;

  const _required = () => props.required ?? formControlContext?.required;

  const _shrink = () =>
    !!(
      props.shrink ??
      (props.shrink ||
        props.focused ||
        props.hasStartAdornment ||
        formControlContext?.hasStartAdornment)
    );

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (formControlContext) yield "FormControl";
      if (!props.disableAnimation) yield "Animated";
      if (_shrink()) yield "Shrink";
      if (_margin() === Margin.Dense) yield `Margin-${_margin()}`;
      if (
        _variant() === ControlVariant.Filled ||
        _variant() === ControlVariant.Outlined
      )
        yield `${_variant()}`;
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
    <FormLabel
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      for={props.for}
      required={_required()}
      focused={_focused()}
      error={_error()}
      data-shrink={String(_shrink()).toLowerCase()}
    >
      {props.children}
    </FormLabel>
  );
}
