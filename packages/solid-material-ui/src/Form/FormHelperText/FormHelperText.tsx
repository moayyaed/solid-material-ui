import { JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Margin, ControlVariant } from "../../Core";

import { FormControlContext } from "../FormControl/FormControlContext";

import "./FormHelperTextStyle";

interface IFormHelperTextOptional extends IComponentBaseProps {
  filled: boolean;
  focused: boolean;
  required: boolean;
  error: boolean;
  hiddenLabel: boolean;
  margin: Margin;
  variant: ControlVariant;
  hasStartAdornment: boolean;
  hasEndAdornment: boolean;
  fullWidth: boolean;
  id: string;
}

interface IFormHelperTextRequired {
  children: JSX.Element;
}

type IFormHelperTextAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IFormHelperTextArguments = Optional<IFormHelperTextOptional> &
  Optional<IFormHelperTextRequired>;

export type IFormHelperTextProps = Partial<Optional<IFormHelperTextOptional>> &
  IFormHelperTextRequired &
  IFormHelperTextAttributes;

const defaults: IFormHelperTextArguments = {
  selector: "FormHelperText",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "p",
  filled: undefined,
  focused: undefined,
  required: undefined,
  error: undefined,
  hiddenLabel: undefined,
  margin: undefined,
  variant: undefined,
  hasStartAdornment: undefined,
  hasEndAdornment: undefined,
  fullWidth: undefined,
  id: undefined,
  children: undefined,
};

export function FormHelperText(args: IFormHelperTextProps): JSX.Element {
  const componentContext = useComponentContext();
  const formControlContext = useContext(FormControlContext);

  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () =>
    props.disabled ??
    componentContext?.disabled ??
    formControlContext?.disabled;

  const _component = () => props.component;

  const _variant = () => props.variant ?? formControlContext?.variant;

  const _margin = () => props.margin ?? formControlContext?.margin;

  const _error = () => props.error ?? formControlContext?.error;

  const _filled = () => props.filled ?? formControlContext?.filled;

  const _focused = () => props.focused ?? formControlContext?.focused;

  const _required = () => props.required ?? formControlContext?.required;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (
        _variant() === ControlVariant.Filled ||
        _variant() === ControlVariant.Outlined
      )
        yield "Container";
      if (_margin() === Margin.Dense) yield `Margin-${_margin()}`;
      if (_error()) yield "Error";
      if (_filled()) yield "Filled";
      if (_focused()) yield "Focused";
      if (_required()) yield "Required";
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
      id={props.id}
    >
      {props.children}
    </Dynamic>
  );
}
