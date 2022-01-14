import { JSX } from "solid-js";

import type {
  IComponentBaseProps,
  Optional,
  IComponentContext,
} from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color, Size } from "../../Core";

import { ButtonType, ButtonBase } from "../ButtonBase";

import { IconButtonEdge } from "./IconButtonEdge";

import { IconButtonSize } from "./IconButtonSize";

import "./IconButtonStyle";

interface IIconButtonOptional extends IComponentBaseProps {
  disableRipple: boolean;
  disableTouchRipple: boolean;
  disableFocusRipple: boolean;
  type: ButtonType;
  ceterRipple: boolean;
  focusRipple: boolean;
  focusVisible: boolean;
  focusVisibleClass: string | undefined;
  rippleClass: string | undefined;
  rippleStyle: JSX.CSSProperties | undefined;
  href: string;
  color: Color;
  labelClass: string | undefined;
  labelStyle: JSX.CSSProperties | undefined;
  edge: IconButtonEdge;
  size: IconButtonSize;
}

interface IIconButtonRequired {
  children: ((context: IComponentContext) => JSX.Element) | JSX.Element;
}

type IIconButtonAttributes = Omit<
  JSX.HTMLAttributes<HTMLButtonElement>,
  "children"
>;

type IIconButtonArguments = Optional<IIconButtonOptional> &
  Optional<IIconButtonRequired>;

export type IIconButtonProps = Partial<Optional<IIconButtonOptional>> &
  IIconButtonRequired &
  IIconButtonAttributes;

const defaults: IIconButtonArguments = {
  selector: "IconButton",
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
  edge: IconButtonEdge.None,
  size: IconButtonSize.Medium,
  children: undefined,
};

export function IconButton(args: IIconButtonProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.color !== Color.Default) yield `Color-${props.color}`;
      if (props.size !== IconButtonSize.Medium) yield `Size-${props.size}`;
      if (props.edge !== IconButtonEdge.None) yield `Edge-${props.edge}`;
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

  return (
    <ButtonBase
      {...(others as any)}
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
          {typeof props.children === "function"
            ? props.children?.(context)
            : props.children}
        </span>
      )}
    </ButtonBase>
  );
}
