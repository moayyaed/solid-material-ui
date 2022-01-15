import { JSX, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Placement } from "../../Core";

import { Typography } from "../../Typography/Typography";

import { FormControlContext } from "../FormControl/FormControlContext";

import "./FormControlLabelStyle";

interface IFormControlLabelOptional extends IComponentBaseProps {
  required: boolean;
  fullWidth: boolean;
  label: string;
  labelClass: string;
  labelStyle: JSX.CSSProperties;
  placement: Placement;
}

interface IFormControlLabelRequired {
  children: JSX.Element;
}

type IFormControlLabelAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IFormControlLabelArguments = Optional<IFormControlLabelOptional> &
  Optional<IFormControlLabelRequired>;

export type IFormControlLabelProps = Partial<
  Optional<IFormControlLabelOptional>
> &
  IFormControlLabelRequired &
  IFormControlLabelAttributes;

const defaults: IFormControlLabelArguments = {
  selector: "FormControlLabel",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "label",
  required: undefined,
  label: undefined,
  labelClass: undefined,
  labelStyle: undefined,
  placement: Placement.End,
  fullWidth: false,
  children: undefined,
};

export function FormControlLabel(args: IFormControlLabelProps): JSX.Element {
  const componentContext = useComponentContext();
  const formControlContext = useContext(FormControlContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () =>
    props.disabled ??
    componentContext?.disabled ??
    formControlContext?.disabled;

  const _component = () => props.component;

  const _required = () => props.required ?? formControlContext?.required;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.placement !== Placement.End)
        yield `Placement-${props.placement}`;
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

  const _labelClass = toClass({
    *append() {
      yield "Label";
      if (_disabled()) yield "Disabled";
    },
    *class() {
      yield props.labelClass;
    },
  });

  const _labelStyle = toStyle({
    *style() {
      yield props.labelStyle;
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
      <Typography component="span" class={_labelClass()} style={_labelStyle()}>
        {props.label}
      </Typography>
    </Dynamic>
  );
}
