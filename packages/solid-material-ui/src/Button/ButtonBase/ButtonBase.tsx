import { For, createSignal, JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type {
  IComponentBaseProps,
  Optional,
  IComponentContext,
} from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color } from "../../Core";

import { ButtonType } from "./ButtonType";

import type { IRippleProps } from "../Ripple";

import { Ripple } from "../Ripple";

import { TransitionGroup } from "solid-transition-group";

import "./ButtonBaseStyle";

interface IButtonBaseOptional extends IComponentBaseProps {
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
}

interface IButtonBaseRequired {
  children: ((context: IComponentContext) => JSX.Element) | JSX.Element;
}

type IButtonBaseAttributes = Omit<
  JSX.HTMLAttributes<HTMLButtonElement>,
  "children"
>;

type IButtonBaseArguments = Optional<IButtonBaseOptional> &
  Optional<IButtonBaseRequired>;

export type IButtonBaseProps = Partial<Optional<IButtonBaseOptional>> &
  IButtonBaseRequired &
  IButtonBaseAttributes;

const defaults: IButtonBaseArguments = {
  selector: "ButtonBase",
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
  children: undefined,
};

export function ButtonBase(args: IButtonBaseProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () =>
    props.component ? props.component : props.href ? "a" : "button";

  // const DURATION = 550;

  // const PULSATE_POINT: ITouchPoint = {
  //   isTouch: false,
  //   clientX: 0,
  //   clientY: 100,
  // };

  // const PULSATE_BOUNTRY: IBoundry = {
  //   top: 0,
  //   left: 0,
  //   width: 0,
  //   height: 0,
  // };

  const [ripples, _] = createSignal<Partial<IRippleProps>[]>();

  const _type = () => (_component() === "button" ? `${props.type}` : undefined);

  const _nagivation = () => props.href && _component() === "a";

  const _href = () => (_nagivation() ? props.href : undefined);

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.focusVisible) {
        yield "FocusVisible";
        yield `~${props.focusVisibleClass}`;
      }
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

  const _rippleClass = toClass({
    section: "Ripple",
    include: true,
    *class() {
      yield props.rippleClass;
    },
  });

  const _rippleStyle = toStyle({
    *style() {
      yield props.rippleStyle;
    },
  });

  return (
    <Dynamic
      {...others}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      type={_type()}
      href={_href()}
    >
      {typeof props.children === "function"
        ? props.children({
            ref: undefined,
            disabled: props.disabled,
            class: _class(),
            style: _style(),
          })
        : props.children}
      <span class={_rippleClass()} style={_rippleStyle()}>
        <TransitionGroup>
          <For each={ripples()}>{(ripple) => <Ripple {...ripple} />}</For>
        </TransitionGroup>
      </span>
    </Dynamic>
  );
}
