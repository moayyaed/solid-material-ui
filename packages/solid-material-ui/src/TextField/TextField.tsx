import {
  Component,
  createSignal,
  JSX,
  Match,
  onMount,
  Show,
  Switch,
} from "solid-js";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { Margin, ControlVariant } from "../Core";

import { Input, InputLabel, OutlinedInput, FilledInput } from "../Input";

import { TextFieldVariant } from "./TextFieldVariant";

import { FormControl, FormHelperText } from "../Form";

interface ITextFieldOptional extends IComponentBaseProps {
  id: string;
  required: boolean;
  error: boolean;
  hiddenLabel: boolean;
  margin: Margin;
  variant: TextFieldVariant;
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
  startAdornment: JSX.Element;
  endAdornment: JSX.Element;
  type: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
  inputClass: string;
  inputStyle: JSX.CSSProperties;
  inputRef: (ref: HTMLInputElement | undefined) => void;
  disableUnderline: boolean;
  shrink: boolean;
  label: string;
  helper: string;
}

interface ITextFieldRequired {}

type ITextFieldAttributes = Omit<
  JSX.HTMLAttributes<HTMLInputElement>,
  "children" | "onChange" | "autoCapitalize" | "onFocus" | "onBlur"
>;

type ITextFieldArguments = Optional<ITextFieldOptional> &
  Optional<ITextFieldRequired>;

export type ITextFieldProps = Partial<Optional<ITextFieldOptional>> &
  ITextFieldRequired &
  ITextFieldAttributes;

const defaults: ITextFieldArguments = {
  selector: "TextField",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  id: undefined,
  hiddenLabel: undefined,
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
  type: undefined,
  value: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
  inputClass: undefined,
  inputStyle: undefined,
  inputRef: undefined,
  disableUnderline: undefined,
  shrink: undefined,
  label: undefined,
  helper: undefined,
};

export function TextField(args: ITextFieldProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _hasStartAdornment = () => !!props.startAdornment;

  const _hasEndAdornment = () => !!props.endAdornment;

  const _variant = () =>
    props.variant ? ControlVariant[props.variant] : ControlVariant.Standard;

  const _helperId = () => (props.id ? `${props.id}-Helper` : "");

  const [labelWidth, setLabelWidth] = createSignal(0);

  const [focused, setFocused] = createSignal(false);

  const [valueState, setValueState] = createSignal(props.defaultValue);

  const _focused = () => focused();

  const _isControlled = () => !!props.onChange;

  const _value = () => (_isControlled() ? props.value : valueState());

  const _handleChange = (value: string) => {
    props.onChange?.(value);
    if (!_isControlled()) {
      setValueState(value);
    }
  };

  const _handleFocus = (event: FocusEvent) => {
    props.onFocus?.(event);
    setFocused(true);
  };

  const _handleBlur = (event: FocusEvent) => {
    props.onBlur?.(event);
    setFocused(false);
  };

  const _shrink = () =>
    props.shrink || _focused() || _value()?.length! > 0 || _hasStartAdornment();

  let _labelRef: HTMLLabelElement | undefined;

  const _handleLabelRef = (labelRef: HTMLElement | undefined) => {
    _labelRef = labelRef as HTMLLabelElement;
  };

  let _inputRef: HTMLInputElement | undefined;

  const _handleInputRef = (inputRef: HTMLElement | undefined) => {
    props?.inputRef?.(inputRef as HTMLInputElement);
    _inputRef = inputRef as HTMLInputElement;
  };

  onMount(() => {
    if (props.variant === TextFieldVariant.Outlined) {
      const lwidth = _labelRef?.offsetWidth ?? 0;
      console.log({ lwidth });
      setLabelWidth(lwidth);
    }

    if (props.autoFous) {
      _inputRef?.focus();
    }
  });

  const _class = toClass({
    *append() {
      yield "Root";
      if (props.disabled) yield "Disabled";
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
    <FormControl
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      fullWidth={props.fullWidth}
      error={props.error}
      focused={_focused()}
      required={props.required}
      hiddenLabel={props.hiddenLabel}
      variant={_variant()}
      margin={props.margin}
    >
      <Show when={props.label}>
        <InputLabel
          ref={_handleLabelRef}
          for={props.id}
          disabled={props.disabled}
          shrink={_shrink()}
          variant={_variant()}
        >
          {props.label}
        </InputLabel>
      </Show>
      <Switch>
        <Match when={_variant() === ControlVariant.Filled}>
          <FilledInput
            {...others}
            inputRef={_handleInputRef}
            component={props.inputComponent}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            margin={props.margin}
            hiddenLabel={props.hiddenLabel}
            required={props.required}
            error={props.error}
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
            defaultValue={props.defaultValue}
            fullWidth={props.fullWidth}
            inputComponent={props.inputComponent}
            multiline={props.multiline}
            rows={props.rows}
            rowsMax={props.rowsMax}
            maxLength={props.maxLength}
            select={props.select}
            type={props.type}
            value={_value()}
            onChange={_handleChange}
            onFocus={_handleFocus}
            onBlur={_handleBlur}
            inputClass={_inputClass()}
            inputStyle={_inputStyle()}
          />
        </Match>
        <Match when={_variant() === ControlVariant.Outlined}>
          <OutlinedInput
            {...others}
            inputRef={_handleInputRef}
            component={props.inputComponent}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            margin={props.margin}
            hiddenLabel={props.hiddenLabel}
            required={props.required}
            error={props.error}
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
            defaultValue={props.defaultValue}
            fullWidth={props.fullWidth}
            inputComponent={props.inputComponent}
            multiline={props.multiline}
            rows={props.rows}
            rowsMax={props.rowsMax}
            maxLength={props.maxLength}
            select={props.select}
            type={props.type}
            value={_value()}
            onChange={_handleChange}
            onFocus={_handleFocus}
            onBlur={_handleBlur}
            inputClass={_inputClass()}
            inputStyle={_inputStyle()}
            notched={_shrink()}
            labelWidth={labelWidth()}
          />
        </Match>
        <Match when={_variant() === ControlVariant.Standard}>
          <Input
            {...others}
            inputRef={_handleInputRef}
            component={props.inputComponent}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            margin={props.margin}
            hiddenLabel={props.hiddenLabel}
            required={props.required}
            error={props.error}
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
            defaultValue={props.defaultValue}
            fullWidth={props.fullWidth}
            inputComponent={props.inputComponent}
            multiline={props.multiline}
            rows={props.rows}
            rowsMax={props.rowsMax}
            maxLength={props.maxLength}
            select={props.select}
            type={props.type}
            value={_value()}
            onChange={_handleChange}
            onFocus={_handleFocus}
            onBlur={_handleBlur}
            inputClass={_inputClass()}
            inputStyle={_inputStyle()}
          />
        </Match>
      </Switch>
      <Show when={props.helper}>
        <FormHelperText
          id={_helperId()}
          disabled={props.disabled}
          variant={_variant()}
        >
          {props.helper}
        </FormHelperText>
      </Show>
    </FormControl>
  );
}
