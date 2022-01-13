import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useParams } from "../Core";

import { TypographyVariant } from "./TypographyVariant";

import { Align, Display, Color } from "../Core";

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

export function Typography(props: ITypographyProps): JSX.Element {
  const componentContext = useComponentContext();
  const [params, others] = useParams(props, defaults);
  const { toClass, toStyle } = useCSS(params);

  const _disabled = () => params.disabled ?? componentContext?.disabled;

  const _component = () =>
    params.component ??
    (params.paragraph ? "p" : mappings[params.variant!] ?? "span");

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (params.variant !== TypographyVariant.Inherit)
        yield `${params.variant}`;
      if (params.color !== Color.Initial) yield `Color-${params.color}`;
      if (params.nowrap) yield "NoWrap";
      if (params.paragraph) yield "Paragraph";
      if (params.gutterBottom) yield "GutterBottom";
      if (params.align !== Align.Inherit) yield `Align-${params.align}`;
      if (params.display !== Display.Initial) yield `Display-${params.display}`;
    },
    *class() {
      yield params.class;
      yield params.className;
      yield componentContext?.class;
    },
  });

  const _style = toStyle({
    *style() {
      yield params.style;
      yield componentContext?.style;
    },
  });

  return (
    <Dynamic
      {...others}
      ref={params.ref}
      component={_component()}
      disabled={_disabled}
      class={_class()}
      style={_style()}
      children={params.children}
    />
  );
}
