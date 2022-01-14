import { JSX, Show } from "solid-js";

import type {
  IComponentBaseProps,
  Optional,
  IComponentContext,
} from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color, Size } from "../../Core";

import { ButtonType, ButtonBase } from "../ButtonBase";

import { ButtonVariant } from "./ButtonVariant";

import "./ButtonStyle";

interface IButtonOptional extends IComponentBaseProps {
  disableRipple: boolean;
  disableTouchRipple: boolean;
  disableFocusRipple: boolean;
  type: ButtonType;
  ceterRipple: boolean;
  focusRipple: boolean;
  focusVisible: boolean;
  focusVisibleClass: string;
  rippleClass: string;
  rippleStyle: JSX.CSSProperties;
  href: string;
  color: Color;
  labelClass: string;
  labelStyle: JSX.CSSProperties;
  variant: ButtonVariant;
  size: Size;
  fullWidth: boolean;
  startIcon: JSX.Element;
  startIconClass: string;
  startIconStyle: JSX.CSSProperties;
  endIcon: JSX.Element;
  endIconClass: string;
  endIconStyle: JSX.CSSProperties;
}

interface IButtonRequired {
  children: ((context: IComponentContext) => JSX.Element) | JSX.Element;
}

type IButtonAttributes = Omit<JSX.HTMLAttributes<HTMLButtonElement>, "children">;

type IButtonArguments = Optional<IButtonOptional> & Optional<IButtonRequired>;

export type IButtonProps = Partial<Optional<IButtonOptional>> &
  IButtonRequired &
  IButtonAttributes;

const defaults: IButtonArguments = {
  selector: "Button",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: undefined,
  type: ButtonType.Button,
  ceterRipple: false,
  focusRipple: false,
  focusVisible: false,
  disableRipple: false,
  focusVisibleClass: undefined,
  disableTouchRipple: false,
  disableFocusRipple: false,
  rippleClass: undefined,
  rippleStyle: undefined,
  href: undefined,
  color: Color.Default,
  labelClass: undefined,
  labelStyle: undefined,
  variant: ButtonVariant.Text,
  size: Size.Medium,
  fullWidth: false,
  startIcon: undefined,
  startIconClass: undefined,
  startIconStyle: undefined,
  endIcon: undefined,
  endIconClass: undefined,
  endIconStyle: undefined,
  children: undefined,
};

export function Button(args: IButtonProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield `${props.variant}`;
      if (props.color !== Color.Default && props.color !== Color.Inherit)
        yield `${props.variant}-${props.color}`;
      if (props.size !== Size.Medium) {
        yield `Size-${props.size}`;
        yield `${props.variant}-Size-${props.size}`;
      }
      if (props.color === Color.Inherit) yield "Color-Inherit";
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

  const _labelClass = toClass({
    section: "Label",
    include: true,
    *class() {
      yield props.labelClass;
    },
  });

  const _labelStyle = toStyle({
    *style() {
      yield props.labelStyle;
    },
  });

  const _startIconClass = toClass({
    section: "",
    *append() {
      yield "StartIcon";
      yield `Icon-Size-${props.size}`;
    },
    *class() {
      yield props.startIconClass;
    },
  });

  const _startIconStyle = toStyle({
    *style() {
      yield props.startIconStyle;
    },
  });

  const _endIconClass = toClass({
    section: "",
    *append() {
      yield "EndIcon";
      yield `Icon-Size-${props.size}`;
    },
    *class() {
      yield props.endIconClass;
    },
  });

  const _endIconStyle = toStyle({
    *style() {
      yield props.endIconStyle;
    },
  });

  return (
    <ButtonBase
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      href={props.href}
      type={props.type}
      disableRipple={props.disableRipple}
      focusRipple={props.focusRipple}
      ceterRipple={props.ceterRipple}
      rippleClass={props.rippleClass}
      rippleStyle={props.rippleStyle}
      color={props.color}
      focusVisibleClass={props.focusVisibleClass}
    >
      {(context) => (
        <span class={_labelClass()} style={_labelStyle()}>
          <Show when={props.startIcon}>
            <span class={_startIconClass()} style={_startIconStyle()}>
              {props.startIcon}
            </span>
          </Show>
          {typeof props.children === "function"
            ? props.children?.(context)
            : props.children}
          <Show when={props.endIcon}>
            <span class={_endIconClass()} style={_endIconStyle()}>
              {props.endIcon}
            </span>
          </Show>
        </span>
      )}
    </ButtonBase>
  );
}
