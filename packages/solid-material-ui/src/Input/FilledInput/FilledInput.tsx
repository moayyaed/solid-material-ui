import { Component, JSX, useContext } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Margin, ControlVariant } from "../../Core";

import { FormControlContext } from "../../Form/FormControl/FormControlContext";

import { IInputContext } from "../InputBase/InputContext";

import { InputBase } from "../InputBase/InputBase";

import "./FilledInputStyle";

interface IFilledInputOptional extends IComponentBaseProps {
  id: string;
  filled: boolean;
  focused: boolean;
  required: boolean;
  error: boolean;
  hiddenLabel: boolean;
  margin: Margin;
  variant: ControlVariant;
  component: Component<any> | string | keyof JSX.IntrinsicElements;
  notched: boolean;
  autoComplete: string;
  autoFous: boolean;
  autoCorrect: boolean;
  autoCapitalize: boolean;
  defaultValue: string;
  fullWidth: boolean;
  inputComponent: Component<any> | string | keyof JSX.IntrinsicElements;
  multiline: boolean;
  name: string;
  placeholder: string;
  readOnly: boolean;
  suffix: (notched: boolean) => JSX.Element;
  rows: number;
  rowsMax: number;
  maxLength: number;
  select: boolean;
  hasStartAdornment: boolean;
  hasEndAdornment: boolean;
  startAdornment: JSX.Element;
  endAdornment: JSX.Element;
  type: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
  inputContent:
    | ((inputContent: IInputContext) => JSX.Element)
    | JSX.Element;
  inputClass: string;
  inputStyle: JSX.CSSProperties;
  inputRef: (ref: HTMLInputElement | undefined) => void;
  disableUnderline: boolean;
}

interface IFilledInputRequired {
}

type IFilledInputAttributes = Omit<
  JSX.HTMLAttributes<HTMLInputElement>,
  "children" | "onChange" | "autoCapitalize" | "onFocus" | "onBlur"
>;

type IFilledInputArguments = Optional<IFilledInputOptional> &
  Optional<IFilledInputRequired>;

export type IFilledInputProps = Partial<Optional<IFilledInputOptional>> &
  IFilledInputRequired &
  IFilledInputAttributes;

const defaults: IFilledInputArguments = {
  selector: "FilledInput",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  id: undefined,
  hiddenLabel: undefined,
  filled: undefined,
  hasStartAdornment: undefined,
  hasEndAdornment: undefined,
  focused: undefined,
  required: undefined,
  error: undefined,
  margin: undefined,
  variant: undefined,
  component: "div",
  notched: undefined,
  autoComplete: undefined,
  autoFous: undefined,
  autoCorrect: undefined,
  autoCapitalize: undefined,
  defaultValue: undefined,
  fullWidth: undefined,
  inputComponent: undefined,
  multiline: undefined,
  name: undefined,
  placeholder: undefined,
  readOnly: undefined,
  suffix: undefined,
  rows: undefined,
  rowsMax: undefined,
  maxLength: undefined,
  select: undefined,
  startAdornment: undefined,
  endAdornment: undefined,
  type: "text",
  value: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
  inputContent: undefined,
  inputClass: undefined,
  inputStyle: undefined,
  inputRef: undefined,
  disableUnderline: undefined,
};

export function FilledInput(args: IFilledInputProps): JSX.Element {
  const componentContext = useComponentContext();
  const formControlContext = useContext(FormControlContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () =>
    props.disabled ??
    componentContext?.disabled ??
    formControlContext?.disabled;

  const _component = () => props.component;

  const _hiddenLabel = () =>
    props.hiddenLabel ?? formControlContext?.hiddenLabel;

  const _filled = () => props.filled ?? formControlContext?.filled;

  const _focused = () => props.focused ?? formControlContext?.focused;

  const _required = () => props.required ?? formControlContext?.required;

  const _error = () => props.error ?? formControlContext?.error;

  const _margin = () => props.margin ?? formControlContext?.margin;

  const _variant = () => props.variant ?? formControlContext?.variant;

  const _hasStartAdornment = () =>
    props.hasStartAdornment ??
    (props.startAdornment ? true : undefined) ??
    formControlContext?.hasStartAdornment;

  const _hasEndAdornment = () =>
    props.hasEndAdornment ??
    (props.endAdornment ? true : undefined) ??
    formControlContext?.hasEndAdornment;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (!props.disableUnderline) yield "Underline";
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

  const _inputClass = toClass({
    *class() {
      yield props.inputClass;
    },
  });

  const _inputStyle = toStyle({
    *style() {
      yield props.inputStyle;
    },
  });

  return (
    <InputBase
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      id={props.id}
      name={props.name}
      margin={_margin()}
      hiddenLabel={_hiddenLabel()}
      required={_required()}
      filled={_filled()}
      error={_error()}
      variant={_variant()}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      focused={_focused()}
      autoComplete={props.autoComplete}
      autoFous={props.autoFous}
      autoCorrect={props.autoCorrect}
      autoCapitalize={props.autoCapitalize}
      hasStartAdornment={_hasStartAdornment()}
      hasEndAdornment={_hasEndAdornment()}
      startAdornment={props.startAdornment}
      endAdornment={props.endAdornment}
      inputContent={props.inputContent}
      defaultValue={props.defaultValue}
      fullWidth={props.fullWidth}
      inputComponent={props.inputComponent}
      multiline={props.multiline}
      rows={props.rows}
      rowsMax={props.rowsMax}
      maxLength={props.maxLength}
      select={props.select}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      inputClass={_inputClass()}
      inputStyle={_inputStyle()}
      notched={props.notched}
      extendor="FilledInput"
    />
  );
}
