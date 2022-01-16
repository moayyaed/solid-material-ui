import { JSX, useContext } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color, Margin, ControlVariant } from "../../Core";

import { SwitchBase } from "../SwitchBase/SwitchBase";

import { RadioGroupContext } from "../RadioGroup/RadioGroupContext";

import { RadioButtonCheckedIcon } from "./Icon/RadioButtonCheckedIcon";

import { RadioButtonUncheckedIcon } from "./Icon/RadioButtonUncheckedIcon";

import { FormControlContext } from "../../Form/FormControl/FormControlContext";

import "./RadioStyle";

interface IRadioOptional extends IComponentBaseProps {
  id: string;
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
  icon: JSX.Element;
  checkedIcon: JSX.Element;
  checked: boolean;
  color: Color;
  disableRipple: boolean;
  autoFocus: boolean;
  defaultChecked: boolean;
  name: string;
  readonly: boolean;
  value: string;
  onChange: (value: string) => void;
  inputClass: string;
  inputStyle: JSX.CSSProperties;
  checkedClass: string;
  checkedStyle: JSX.CSSProperties;
  disabledClass: string;
  disabledStyle: JSX.CSSProperties;
  inputProps: { [key: string]: any };
}

interface IRadioRequired {}

type IRadioAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children" | "onChange"
>;

type IRadioArguments = Optional<IRadioOptional> & Optional<IRadioRequired>;

export type IRadioProps = Partial<Optional<IRadioOptional>> &
  IRadioRequired &
  IRadioAttributes;

const defaults: IRadioArguments = {
  selector: "Radio",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "span",
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
  icon: undefined,
  checkedIcon: undefined,
  checked: undefined,
  color: Color.Secondary,
  disableRipple: false,
  autoFocus: false,
  defaultChecked: false,
  name: undefined,
  readonly: false,
  value: undefined,
  onChange: undefined,
  inputClass: undefined,
  inputStyle: undefined,
  checkedClass: undefined,
  checkedStyle: undefined,
  disabledClass: undefined,
  disabledStyle: undefined,
  inputProps: {},
  fullWidth: false,
};

export function Radio(args: IRadioProps): JSX.Element {
  const componentContext = useComponentContext();
  const formControlContext = useContext(FormControlContext);
  const radioGroupContext = useContext(RadioGroupContext);
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
    props.hasStartAdornment ?? formControlContext?.hasStartAdornment;

  const _hasEndAdornment = () =>
    props.hasEndAdornment ?? formControlContext?.hasEndAdornment;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield `Color-${props.color}`;
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

  const _disabledClass = toClass({
    section: "Disabled",
    include: true,
    *class() {
      yield props.disabledClass;
    },
  });

  const _disabledStyle = toStyle({
    *style() {
      yield props.disabledStyle;
    },
  });

  const _inputClass = toClass({
    section: "Input",
    include: true,
    *class() {
      yield props.inputClass;
    },
  });

  const _inputStyle = toStyle({
    *style() {
      yield props.inputStyle;
    },
  });

  const _checkedClass = toClass({
    section: "Checked",
    include: true,
    *class() {
      yield props.checkedClass;
    },
  });

  const _checkedStyle = toStyle({
    *style() {
      yield props.checkedStyle;
    },
  });

  const _icon = () => props.icon ?? <RadioButtonUncheckedIcon />;

  const _checkedIcon = () => props.checkedIcon ?? <RadioButtonCheckedIcon />;

  const _handleChange = (value: string): void => {
    props.onChange?.(value);
    radioGroupContext?.onChange?.(value);
  };

  const _name = () => props.name ?? radioGroupContext?.name;

  const _checked = () =>
    props.checked !== undefined
      ? props.checked
      : radioGroupContext?.value === props.value;

  return (
    <SwitchBase
      {...others}
      type="radio"
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      hiddenLabel={_hiddenLabel()}
      filled={_filled()}
      hasStartAdornment={_hasStartAdornment()}
      hasEndAdornment={_hasEndAdornment()}
      focused={_focused()}
      required={_required()}
      error={_error()}
      margin={_margin()}
      variant={_variant()}
      id={props.id}
      name={_name()}
      value={props.value}
      defaultChecked={props.defaultChecked}
      checked={_checked()}
      disableRipple={props.disableRipple}
      onChange={_handleChange}
      disabledClass={_disabledClass()}
      disabledStyle={_disabledStyle()}
      inputClass={_inputClass()}
      inputStyle={_inputStyle()}
      inputProps={props.inputProps}
      checkedClass={_checkedClass()}
      checkedStyle={_checkedStyle()}
      icon={_icon()}
      checkedIcon={_checkedIcon()}
    />
  );
}
