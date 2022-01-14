import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import {
  Wrap,
  Justify,
  Direction,
  AlignItems,
  AlignContent,
  Spacing,
} from "../Core";

import { GridSize } from "./GridSize";

import "./GridStyle";

interface IGridOptional extends IComponentBaseProps {
  zeroMinWidth: boolean;
  wrap: Wrap;
  justify: Justify;
  direction: Direction;
  alignItems: AlignItems;
  alignContent: AlignContent;
  spacing: Spacing;
  container: boolean;
  item: boolean;
  extraSmall: GridSize;
  small: GridSize;
  medium: GridSize;
  large: GridSize;
  extraLarge: GridSize;
}

interface IGridRequired {
  children: JSX.Element;
}

type IGridAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IGridArguments = Optional<IGridOptional> & Optional<IGridRequired>;

export type IGridProps = Partial<Optional<IGridOptional>> &
  IGridRequired &
  IGridAttributes;

const defaults: IGridArguments = {
  selector: "Grid",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  zeroMinWidth: false,
  wrap: Wrap.Wrap,
  justify: Justify.FlexStart,
  direction: Direction.Row,
  alignItems: AlignItems.Stretch,
  alignContent: AlignContent.Stretch,
  spacing: Spacing.Zero,
  container: false,
  item: false,
  extraSmall: GridSize.False,
  small: GridSize.False,
  medium: GridSize.False,
  large: GridSize.False,
  extraLarge: GridSize.False,
  children: undefined,
};

export function Grid(args: IGridProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.container) yield "Container";
      if (props.item) yield "Item";
      if (props.zeroMinWidth) yield "ZeroMinWidth";
      if (props.container && props.spacing !== Spacing.Zero)
        yield `Spacing-XS-${props.spacing}`;
      if (props.direction !== Direction.Row)
        yield `Direction-XS-${props.direction}`;
      if (props.wrap !== Wrap.Wrap) yield `Wrap-XS-${props.wrap}`;
      if (props.alignItems !== AlignItems.Stretch)
        yield `AlignItems-XS-${props.alignItems}`;
      if (props.alignContent !== AlignContent.Stretch)
        yield `AlignContent-XS-${props.alignContent}`;
      if (props.justify !== Justify.FlexStart)
        yield `Justify-XS-${props.justify}`;
      if (props.extraSmall !== GridSize.False) yield `XS-${props.extraSmall}`;
      if (props.small !== GridSize.False) yield `SM-${props.small}`;
      if (props.medium !== GridSize.False) yield `MD-${props.medium}`;
      if (props.large !== GridSize.False) yield `LG-${props.large}`;
      if (props.extraLarge !== GridSize.False) yield `XL-${props.extraLarge}`;
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
