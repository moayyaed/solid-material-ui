import { createSignal, JSX, Show, useContext } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { IconButton } from "../../Button";

import { Color, Margin, ControlVariant } from "../../Core";

import { FormControlContext } from "../../Form";

import "./SwitchBaseStyle";

interface ISwitchBaseOptional extends IComponentBaseProps {
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
  type: string;
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

interface ISwitchBaseRequired {
}

type ISwitchBaseAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children" | "onChange"
>;

type ISwitchBaseArguments = Optional<ISwitchBaseOptional> &
  Optional<ISwitchBaseRequired>;

export type ISwitchBaseProps = Partial<Optional<ISwitchBaseOptional>> &
  ISwitchBaseRequired &
  ISwitchBaseAttributes;

const defaults: ISwitchBaseArguments = {
  selector: "SwitchBase",
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
  color: Color.Default,
  disableRipple: false,
  autoFocus: false,
  defaultChecked: false,
  name: undefined,
  readonly: false,
  type: "text",
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

export function SwitchBase(args: ISwitchBaseProps): JSX.Element {
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

  const [checkedState, setCheckedState] = createSignal(props.defaultChecked);

  const isControlled = () => props.checked !== undefined;

  const isChecked = () => (isControlled() ? props.checked : checkedState());

  const hasLabelFor = () => props.type === "checkbox" || props.type === "radio";

  const _inputId = () => (hasLabelFor() ? props.id : undefined);

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (isChecked()) {
        yield "Checked";
        yield `~${props.checkedClass}`;
      }
      if (_disabled() && props.disabledClass) yield `~${props.disabledClass}`;
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
    *property() {
      if (isChecked()) {
        for (const entry of Object.entries(props.checkedStyle ?? {}))
          yield entry;
      }
      if (props.disabled) {
        for (const entry of Object.entries(props.disabledStyle ?? {}))
          yield entry;
      }
    },
  });

  const _inputClass = toClass({
    section: "Input",
    include: true,
    *append() {
      if (_disabled()) yield "Disabled";
    },
    *class() {
      yield props.inputClass;
    },
  });

  const _inputStyle = toStyle({
    *style() {
      yield props.inputStyle;
    },
  });

  const _handleChange = (args: any) => {
    props.onChange?.(args.target?.value);
    if (!isControlled()) {
      setCheckedState((previous) => !previous);
    }
  };

  const inputProps = () => props.inputProps;

  return (
    <IconButton
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      disableRipple={props.disableRipple}
    >
      <input
        disabled={_disabled()}
        class={_inputClass()}
        style={_inputStyle()}
        id={_inputId()}
        autofocus={props.autoFocus}
        type={props.type}
        name={props.name}
        value={props.value}
        checked={isChecked()}
        {...inputProps()}
        onChange={_handleChange}
      ></input>
      <Show when={isChecked()} fallback={props.icon}>
        {props.checkedIcon}
      </Show>
    </IconButton>
  );
}
