import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { Align, Display, Color } from "../Core";

import { TypographyVariant } from "./TypographyVariant";

import "./TypographyStyle";

interface ITypographyOptional extends IComponentBaseProps {
  variant: TypographyVariant;
  align: Align;
  display: Display;
  color: Color;
  gutterBottom: boolean;
  nowrap: boolean;
  paragraph: boolean;
}

interface ITypographyRequired {
  children: JSX.Element;
}

type ITypographyAttributes = Omit<
  JSX.HTMLAttributes<HTMLParagraphElement>,
  "children"
>;

type ITypographyArguments = Optional<ITypographyOptional> &
  Optional<ITypographyRequired>;

export type ITypographyProps = Partial<Optional<ITypographyOptional>> &
  ITypographyRequired &
  ITypographyAttributes;

const defaults: ITypographyArguments = {
  selector: "Typography",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: undefined,
  variant: TypographyVariant.Body1,
  align: Align.Inherit,
  display: Display.Initial,
  color: Color.Initial,
  gutterBottom: false,
  nowrap: false,
  paragraph: false,
  children: undefined,
};

const mappings: { [key: string]: string } = {
  [TypographyVariant.Caption]: "span",
  [TypographyVariant.H1]: "h1",
  [TypographyVariant.H2]: "h2",
  [TypographyVariant.H3]: "h3",
  [TypographyVariant.H4]: "h4",
  [TypographyVariant.H5]: "h5",
  [TypographyVariant.H6]: "h6",
  [TypographyVariant.Subtitle1]: "h6",
  [TypographyVariant.Subtitle2]: "h6",
  [TypographyVariant.Body1]: "p",
  [TypographyVariant.Body2]: "p",
};

export function Typography(args: ITypographyProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () =>
    props.component ??
    (props.paragraph ? "p" : mappings[props.variant!] ?? "span");

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.variant !== TypographyVariant.Inherit)
        yield `${props.variant}`;
      if (props.color !== Color.Initial) yield `Color-${props.color}`;
      if (props.nowrap) yield "NoWrap";
      if (props.paragraph) yield "Paragraph";
      if (props.gutterBottom) yield "GutterBottom";
      if (props.align !== Align.Inherit) yield `Align-${props.align}`;
      if (props.display !== Display.Initial) yield `Display-${props.display}`;
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
      disabled={_disabled}
      class={_class()}
      style={_style()}
      children={props.children}
    />
  );
}
