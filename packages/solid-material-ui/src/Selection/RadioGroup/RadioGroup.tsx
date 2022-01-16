import { createMemo, createSignal, JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { FormGroup } from "../../Form";

import { IRadioGroupContext, RadioGroupContext } from "./RadioGroupContext";

interface IRadioGroupOptional extends IComponentBaseProps {
  row: boolean;
  name: string;
  defaultValue: string;
  value: string;
  onChange: (value: string) => void;
}

interface IRadioGroupRequired {
  children: JSX.Element;
}

type IRadioGroupAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IRadioGroupArguments = Optional<IRadioGroupOptional> &
  Optional<IRadioGroupRequired>;

export type IRadioGroupProps = Partial<Optional<IRadioGroupOptional>> &
  IRadioGroupRequired &
  IRadioGroupAttributes;

const defaults: IRadioGroupArguments = {
  selector: "RadioGroup",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  row: false,
  name: undefined,
  defaultValue: undefined,
  value: undefined,
  onChange: undefined,
  children: undefined,
};

export function RadioGroup(args: IRadioGroupProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const [valueState, setValueState] = createSignal<string | undefined>(
    props.defaultValue
  );

  const isControlled = () => props.value !== undefined;

  const _handleChange = (value: string) => {
    if (!isControlled()) {
      setValueState(value);
    }
    props.onChange?.(value);
  };

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
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

  const _radioGroupContext = createMemo(() => {
    return {
      get class() {
        return _class();
      },
      get style() {
        return _style();
      },
      get disabled() {
        return props.disabled;
      },
      get name() {
        return props.name;
      },
      get value() {
        return isControlled() ? props.value : valueState();
      },
      get onChange() {
        return _handleChange;
      },
    } as IRadioGroupContext;
  });

  return (
    <FormGroup
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      row={props.row}
    >
      <RadioGroupContext.Provider value={_radioGroupContext()}>
        {props.children}
      </RadioGroupContext.Provider>
    </FormGroup>
  );
}
