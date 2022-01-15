import type { JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { Align, Color, Display, Underline } from "../Core";

import { Typography, TypographyVariant } from "../Typography";

import { LinkVariant } from "./LinkVariant";

import "./LinkStyle";

interface ILinkOptional extends IComponentBaseProps {
  variant: LinkVariant;
  underline: Underline;
  color: Color;
  href: string;
  align: Align;
  display: Display;
  gutterBottom: boolean;
  nowrap: boolean;
  paragraph: boolean;
}

interface ILinkRequired {
  children: JSX.Element;
}

type ILinkAttributes = Omit<JSX.HTMLAttributes<HTMLAnchorElement>, "children">;

type ILinkArguments = Optional<ILinkOptional> & Optional<ILinkRequired>;

export type ILinkProps = Partial<Optional<ILinkOptional>> &
  ILinkRequired &
  ILinkAttributes;

const defaults: ILinkArguments = {
  selector: "Link",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "a",
  color: Color.Primary,
  href: undefined,
  variant: LinkVariant.Inherit,
  underline: Underline.Hover,
  align: Align.Inherit,
  display: Display.Initial,
  gutterBottom: false,
  nowrap: false,
  paragraph: false,
  children: undefined,
};

export function Link(args: ILinkProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _variant = () => TypographyVariant[props.variant!];

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.component === "button") yield "Button";
      yield `Underline-${Underline}`;
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
    <Typography
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      variant={_variant()}
      color={props.color}
      align={props.align}
      display={props.display}
      gutterBottom={props.gutterBottom}
      nowrap={props.nowrap}
      paragraph={props.paragraph}
    >
      {props.children}
    </Typography>
  );
}
