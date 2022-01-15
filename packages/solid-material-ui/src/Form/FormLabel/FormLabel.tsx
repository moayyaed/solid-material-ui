import { JSX, Show, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Margin, ControlVariant } from "../../Core";

import { FormControlContext } from "../FormControl/FormControlContext";

import "./FormLabelStyle";

interface IFormLabelOptional extends IComponentBaseProps {
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
  for: string;
  requiredClass: string;
  requiredStyle: JSX.CSSProperties;
}

interface IFormLabelRequired {
  children: JSX.Element;
}

type IFormLabelAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IFormLabelArguments = Optional<IFormLabelOptional> &
  Optional<IFormLabelRequired>;

export type IFormLabelProps = Partial<Optional<IFormLabelOptional>> &
  IFormLabelRequired &
  IFormLabelAttributes;

const defaults: IFormLabelArguments = {
  selector: "FormLabel",
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
  requiredClass: undefined,
  requiredStyle: undefined,
  fullWidth: undefined,
  children: undefined,
};

export function FormLabel(args: IFormLabelProps): JSX.Element {
  const componentContext = useComponentContext();
  const formControlContext = useContext(FormControlContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () =>
    props.disabled ??
    componentContext?.disabled ??
    formControlContext?.disabled;

  const _component = () => props.component;

  const _error = () => props.error ?? formControlContext?.error;

  const _filled = () => props.filled ?? formControlContext?.filled;

  const _focused = () => props.focused ?? formControlContext?.focused;

  const _required = () => props.required ?? formControlContext?.required;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
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

  const _requiredClass = toClass({
    *append() {
      yield "Asterisk";
      if (_error()) yield "Error";
    },
    *class() {
      yield props.requiredClass;
    },
  });

  const _requiredStyle = toStyle({
    *style() {
      yield props.requiredStyle;
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
      for={props.for}
    >
      {props.children}
      <Show when={props.required}>
        <span class={_requiredClass()} style={_requiredStyle()}>
          &thinsp;*
        </span>
      </Show>
    </Dynamic>
  );
}
