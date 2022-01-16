import { createMemo, createSignal, JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Margin, ControlVariant } from "../../Core";

import { FormControlContext, IFormControlContext } from "./FormControlContext";

import "./FormControlStyle";

interface IFormControlOptional extends IComponentBaseProps {
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
}

interface IFormControlRequired {
  children: JSX.Element;
}

type IFormControlAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IFormControlArguments = Optional<IFormControlOptional> &
  Optional<IFormControlRequired>;

export type IFormControlProps = Partial<Optional<IFormControlOptional>> &
  IFormControlRequired &
  IFormControlAttributes;

const defaults: IFormControlArguments = {
  selector: "FormControl",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  filled: undefined,
  focused: undefined,
  required: undefined,
  error: undefined,
  hiddenLabel: undefined,
  margin: undefined,
  variant: undefined,
  component: "div",
  hasStartAdornment: undefined,
  hasEndAdornment: undefined,
  fullWidth: undefined,
  children: undefined,
};

export function FormControl(args: IFormControlProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const [focused, setFocused] = createSignal(false);

  const [filled, setFilled] = createSignal(false);

  const _filled = () => props.filled ?? filled();

  const _focused = () => props.focused ?? focused();

  const _margin = () => props.margin ?? Margin.None;

  const _handleFocus = (event: FocusEvent) => setFocused(true);

  const _handleBlur = (event: FocusEvent) => setFocused(false);

  const _handleFilled = () => setFilled(true);

  const _handleEmpty = () => setFilled(false);

  const _class = toClass({
    *append() {
      yield "Root";
      if (props.disabled) yield "Disabled";
      if (_margin() !== Margin.None) yield `Margin-${_margin()}`;
      if (props.fullWidth) yield "FullWidth";
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

  const _formControlContext = createMemo(
    () =>
      ({
        get ref() {
          return undefined;
        },
        get class() {
          return _class();
        },
        get style() {
          return _style();
        },
        get disabled() {
          return props.disabled;
        },
        get filled() {
          return _filled();
        },
        get focused() {
          return _focused();
        },
        get margin() {
          return _margin();
        },
        get variant() {
          return props.variant;
        },
        get required() {
          return props.required;
        },
        get error() {
          return props.error;
        },
        get hiddenLabel() {
          return props.hiddenLabel;
        },
        get hasStartAdornment() {
          return props.hasStartAdornment;
        },
        get hasEndAdornment() {
          return props.hasEndAdornment;
        },
        get onFocus() {
          return _handleFocus;
        },
        get onBlur() {
          return _handleBlur;
        },
        get onFill() {
          return _handleFilled;
        },
        get onEmpty() {
          return _handleEmpty;
        },
      } as IFormControlContext)
  );

  return (
    <Dynamic
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
    >
      <FormControlContext.Provider value={_formControlContext()}>
        {props.children}
      </FormControlContext.Provider>
    </Dynamic>
  );
}
