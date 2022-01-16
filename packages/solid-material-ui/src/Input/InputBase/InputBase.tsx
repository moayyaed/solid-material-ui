import {
  Component,
  createMemo,
  createSignal,
  JSX,
  onMount,
  Show,
  useContext,
} from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Margin, ControlVariant } from "../../Core";

import { FormControlContext } from "../../Form";

import { IInputContext, InputContext } from "./InputContext";

import "./InputBaseStyle";

interface IInputBaseOptional extends IComponentBaseProps {
  id: string;
  filled: boolean;
  focused: boolean;
  required: boolean;
  error: boolean;
  hiddenLabel: boolean;
  margin: Margin;
  variant: ControlVariant;
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
  suffix: ({ notched }: { notched: boolean }) => JSX.Element;
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
  inputContent: ((inputContent: IInputContext) => JSX.Element) | JSX.Element;
  inputClass: string;
  inputStyle: JSX.CSSProperties;
  inputRef: (ref: HTMLInputElement | undefined) => void;
}

interface IInputBaseRequired {
}

type IInputBaseAttributes = Omit<
  JSX.HTMLAttributes<HTMLInputElement>,
  "children" | "onChange" | "autoCapitalize" | "onFocus" | "onBlur"
>;

type IInputBaseArguments = Optional<IInputBaseOptional> &
  Optional<IInputBaseRequired>;

export type IInputBaseProps = Partial<Optional<IInputBaseOptional>> &
  IInputBaseRequired &
  IInputBaseAttributes;

const defaults: IInputBaseArguments = {
  selector: "InputBase",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  hiddenLabel: undefined,
  filled: undefined,
  hasStartAdornment: undefined,
  hasEndAdornment: undefined,
  focused: undefined,
  required: undefined,
  error: undefined,
  margin: undefined,
  variant: undefined,
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
  id: undefined,
};

export function InputBase(args: IInputBaseProps): JSX.Element {
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

  const _hasInputContent = () => !!props.inputContent;

  const _inputComponent = () =>
    props.inputComponent ?? (props.multiline ? "textarea" : "input");

  const _autoCorrect = () => (props.autoCorrect ? "on" : "off");

  const _autoCapitalize = () => (props.autoCapitalize ? "on" : "off");

  const [valueState, setValueState] = createSignal(props.defaultValue ?? "");

  const _isControlled = () => !!props.onChange;

  const _value = () => (_isControlled() ? props.value ?? "" : valueState());

  const _notched = () =>
    !!(props.notched ?? _hasStartAdornment() ?? props.filled ?? props.focused);

  const _dirtyCheck = (value: string) =>
    !!value ? formControlContext?.onFill?.() : formControlContext?.onEmpty?.();

  const _handleChange = (args: any) => {
    const value = args.target?.value;
    props.onChange?.(value);
    if (!_isControlled()) {
      setValueState(value);
    }
    _dirtyCheck(value);
  };

  let _inputRef: HTMLInputElement | undefined;

  onMount(() => {
    const value = _inputRef?.value;
    if (!!value) {
      if (_isControlled()) {
        if (value !== props.value) {
          props.onChange?.(value);
        }
      } else {
        setValueState(value);
      }
      _dirtyCheck(value);
    }
  });

  const _handleInputRef = (inputRef: HTMLInputElement | undefined) => {
    props?.inputRef?.(inputRef);
    _inputRef = inputRef;
  };

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (formControlContext) yield "FormControl";
      if (_error()) yield "Error";
      if (_filled()) yield "Filled";
      if (_focused()) yield "Focused";
      if (_required()) yield "Required";
      if (props.fullWidth) yield "FullWidth";
      if (props.multiline) yield "Multiline";
      if (_hasStartAdornment()) yield "StartAdornment";
      if (_hasEndAdornment()) yield "EndAdornment";
      if (_margin() === Margin.Dense) yield `Margin-${props.margin}`;
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
    section: "Input",
    include: true,
    *append() {
      if (_disabled()) yield "Disabled";
      if (props.select) yield "Select";
      if (_hiddenLabel()) yield "HiddenLabel";
      if (_margin() === Margin.Dense) yield `Margin-${props.margin}`;
      if (props.multiline) yield "Multiline";
      if (_hasStartAdornment()) yield "StartAdornment";
      if (_hasEndAdornment()) yield "EndAdornment";
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

  const _handleFocus = (event: FocusEvent) => {
    props.onFocus?.(event);
    formControlContext?.onFocus?.(event);
  };

  const _handleBlur = (event: FocusEvent) => {
    props.onBlur?.(event);
    formControlContext?.onBlur?.(event);
  };

  const _inputContext = createMemo((): IInputContext => {
    return {
      get ref() {
        return undefined;
      },
      get class() {
        return _inputClass();
      },
      get style() {
        return _inputStyle();
      },
      get disabled() {
        return _disabled();
      },
      get filled() {
        return _filled();
      },
      get focused() {
        return _focused();
      },
      get required() {
        return _required();
      },
      get error() {
        return _error();
      },
      get hiddenLabel() {
        return _hiddenLabel();
      },
      get hasStartAdornment() {
        return _hasStartAdornment();
      },
      get hasEndAdornment() {
        return _hasEndAdornment();
      },
      get onFocus() {
        return _handleFocus;
      },
      get onBlur() {
        return _handleBlur;
      },
      get onFill() {
        return formControlContext?.onFill;
      },
      get onEmpty() {
        return formControlContext?.onEmpty;
      },
      get inputRef() {
        return _handleInputRef;
      },
      get value() {
        return _value();
      },
      get id() {
        return props.id;
      },
      get type() {
        return props.type;
      },
      get name() {
        return props.name;
      },
      get margin() {
        return _margin();
      },
      get variant() {
        return _variant();
      },
      get autoFocus() {
        return props.autoFous;
      },
      get autoComplete() {
        return props.autoComplete;
      },
      get autoCapitalize() {
        return _autoCapitalize();
      },
      get autoCorrect() {
        return _autoCorrect();
      },
      get placeholder() {
        return props.placeholder;
      },
      get readOnly() {
        return props.readOnly;
      },
      get rows() {
        return props.rows;
      },
      get maxLength() {
        return props.maxLength;
      },
      get onChange() {
        return _handleChange;
      },
    };
  });

  return (
    <Dynamic
      {...others}
      component={props.component}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
    >
      {props.startAdornment}
      <InputContext.Provider value={_inputContext()}>
        <Show
          when={!_hasInputContent()}
          fallback={
            typeof props.inputContent === "function"
              ? props.inputContent(_inputContext())
              : props.inputContent
          }
        >
          <Dynamic
            {...others}
            ref={_handleInputRef}
            component={_inputComponent()}
            disabled={_disabled()}
            class={_inputClass()}
            style={_inputStyle()}
            id={props.id}
            name={props.name}
            type={props.type}
            value={_value()}
            autofocus={props.autoFous}
            autocomplete={props.autoComplete}
            autocorrect={_autoCorrect()}
            autocapitalize={_autoCapitalize()}
            placeholder={props.placeholder}
            readonly={props.readOnly}
            required={props.required}
            aria-required={String(_required())}
            aria-invalid={String(_error())}
            rows={props.rows}
            maxlength={props.maxLength}
            onInput={_handleChange}
            onfocus={_handleFocus}
            onBlur={_handleBlur}
          />
        </Show>
      </InputContext.Provider>
      {props.endAdornment}
      {props.suffix?.({
        get notched() {
          return _notched();
        },
      })}
    </Dynamic>
  );
}
