import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import "./FormGroupStyle";

interface IFormGroupOptional extends IComponentBaseProps {
  row: boolean;
}

interface IFormGroupRequired {
  children: JSX.Element;
}

type IFormGroupAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IFormGroupArguments = Optional<IFormGroupOptional> &
  Optional<IFormGroupRequired>;

export type IFormGroupProps = Partial<Optional<IFormGroupOptional>> &
  IFormGroupRequired &
  IFormGroupAttributes;

const defaults: IFormGroupArguments = {
  selector: "FormGroup",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  row: undefined,
  children: undefined,
};

export function FormGroup(args: IFormGroupProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.row) yield "Row";
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
    >
      {props.children}
    </Dynamic>
  );
}
