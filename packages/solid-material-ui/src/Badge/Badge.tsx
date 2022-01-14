import { JSX, Show } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { Color, Vertical, Horizontal } from "../Core";

import { BadgeOverlap } from "./BadgeOverlap";

import { BadgeVariant } from "./BadgeVariant";

import "./BadgeStyle";

interface IBadgeOptional extends IComponentBaseProps {
  badgeText: string;
  badgeContent: JSX.Element;
  variant: BadgeVariant;
  overlap: BadgeOverlap;
  horizontal: Horizontal;
  vertical: Vertical;
  showZero: boolean;
  invisible: boolean | undefined;
  max: number;
  color: Color;
  badgeClass: string | undefined;
  badgeStyle: JSX.CSSProperties | undefined;
}

interface IBadgeRequired {
  children: JSX.Element;
}

type IBadgeAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IBadgeArguments = Optional<IBadgeOptional> & Optional<IBadgeRequired>;

export type IBadgeProps = Partial<Optional<IBadgeOptional>> &
  IBadgeRequired &
  IBadgeAttributes;

const defaults: IBadgeArguments = {
  selector: "Badge",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "span",
  badgeText: undefined,
  badgeContent: undefined,
  variant: BadgeVariant.Standard,
  overlap: BadgeOverlap.Rectangle,
  horizontal: Horizontal.Right,
  vertical: Vertical.Top,
  showZero: false,
  invisible: undefined,
  max: 99,
  color: Color.Default,
  badgeClass: undefined,
  badgeStyle: undefined,
  children: undefined,
};

export function Badge(args: IBadgeProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const badgeNumber = (): number | undefined => {
    try {
      if (props.badgeText) {
        return parseInt(props.badgeText, 10);
      }
    } catch (e) {}
  };

  const badgeInvisible = (): boolean => {
    if (props.invisible !== undefined && props.invisible !== undefined) {
      return props.invisible;
    }
    const nibNumber = badgeNumber();
    if (nibNumber === 0 && !props.showZero) {
      return true;
    }
    if (
      props.badgeText?.length === 0 &&
      props.badgeContent === undefined &&
      props.variant !== BadgeVariant.Dot
    ) {
      return true;
    }
    return false;
  };

  const badgeDisplay = (): string | undefined => {
    if (props.variant === BadgeVariant.Dot) {
      return "";
    }
    const nibNumber = badgeNumber();
    if (nibNumber !== undefined && nibNumber > props.max!) {
      return `${props.max}+`;
    }
    return props.badgeText;
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

  const _badgeClass = toClass({
    section: "",
    *append() {
      yield "Badge";
      if (props.color !== Color.Default) yield `Color-${props.color}`;
      if (badgeInvisible()) yield `Invisible`;
      if (props.variant === BadgeVariant.Dot) yield `${props.variant}`;
      yield `${props.vertical}-${props.horizontal}-${props.overlap}`;
    },
    *class() {
      yield props.badgeClass;
    },
  });

  const _badgeStyle = toStyle({
    *style() {
      yield props.badgeStyle;
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
      <span class={_badgeClass()} style={_badgeStyle()}>
        <Show when={props.badgeContent} fallback={badgeDisplay()}>
          {props.badgeContent}
        </Show>
      </span>
    </Dynamic>
  );
}
