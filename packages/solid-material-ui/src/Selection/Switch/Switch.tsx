import { JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color, Margin, ControlVariant, Edge, Size } from "../../Core";

import { SwitchBase } from "../SwitchBase/SwitchBase";

import { FormControlContext } from "../../Form/FormControl/FormControlContext";

import "./SwitchStyle";

interface ISwitchOptional extends IComponentBaseProps {
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
  //
  edge: Edge;
  size: Size;
  switchBaseClass: string;
  switchBaseStyle: JSX.CSSProperties;
  thumbClass: string;
  thumbStyle: JSX.CSSProperties;
  trackClass: string;
  trackStyle: JSX.CSSProperties;
}

interface ISwitchRequired {}

type ISwitchAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children" | "onChange"
>;

type ISwitchArguments = Optional<ISwitchOptional> & Optional<ISwitchRequired>;

export type ISwitchProps = Partial<Optional<ISwitchOptional>> &
  ISwitchRequired &
  ISwitchAttributes;

const defaults: ISwitchArguments = {
  selector: "Switch",
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
  fullWidth: undefined,
  focused: undefined,
  required: undefined,
  error: undefined,
  margin: undefined,
  variant: undefined,
  component: "span",
  icon: undefined,
  checkedIcon: undefined,
  checked: undefined,
  color: Color.Secondary,
  disableRipple: false,
  autoFocus: false,
  defaultChecked: false,
  name: "",
  readonly: false,
  value: "",
  onChange: undefined,
  inputClass: undefined,
  inputStyle: undefined,
  checkedClass: undefined,
  checkedStyle: undefined,
  disabledClass: undefined,
  disabledStyle: undefined,
  inputProps: {},
  //
  edge: Edge.None,
  size: Size.Medium,
  switchBaseClass: undefined,
  switchBaseStyle: undefined,
  thumbClass: undefined,
  thumbStyle: undefined,
  trackClass: undefined,
  trackStyle: undefined,
};

export function Switch(args: ISwitchProps): JSX.Element {
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
    props.hasStartAdornment ?? formControlContext?.hasStartAdornment;

  const _hasEndAdornment = () =>
    props.hasEndAdornment ?? formControlContext?.hasEndAdornment;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.size !== Size.Medium) yield `Size-${props.size}`;
      if (props.edge === Edge.Start || props.edge === Edge.End)
        yield `Edge-${props.edge}`;
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

  const _switchBaseClass = toClass({
    section: "SwitchBase",
    include: true,
    *append() {
      yield `~Switch-Color-${props.color}`;
    },
    *class() {
      yield props.switchBaseClass;
    },
  });

  const _switchBaseStyle = toStyle({
    *style() {
      yield props.switchBaseStyle;
    },
  });

  const _thumbClass = toClass({
    section: "Thumb",
    include: true,
    *class() {
      yield props.thumbClass;
    },
  });

  const _thumbStyle = toStyle({
    *style() {
      yield props.thumbStyle;
    },
  });

  const _trackClass = toClass({
    section: "Track",
    include: true,
    *class() {
      yield props.trackClass;
    },
  });

  const _trackStyle = toStyle({
    *style() {
      yield props.trackStyle;
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

  const thumb = <span class={_thumbClass()} style={_thumbStyle()} />;

  return (
    <Dynamic
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
    >
      <SwitchBase
        type="checkbox"
        disabled={_disabled()}
        class={_switchBaseClass()}
        style={_switchBaseStyle()}
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
        name={props.name}
        value={props.value}
        defaultChecked={props.defaultChecked}
        checked={props.checked}
        disableRipple={props.disableRipple}
        onChange={props.onChange}
        disabledClass={_disabledClass()}
        disabledStyle={_disabledStyle()}
        inputClass={_inputClass()}
        inputStyle={_inputStyle()}
        inputProps={props.inputProps}
        checkedClass={_checkedClass()}
        checkedStyle={_checkedStyle()}
        icon={thumb}
        checkedIcon={thumb}
      />
      <span class={_trackClass()} style={_trackStyle()} />
    </Dynamic>
  );
}
