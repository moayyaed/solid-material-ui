import { createMemo, JSX } from "solid-js";

import type { IComponentBaseProps, Optional, IComponentContext } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { Breakpoint, ComponentContext } from "../Core";

import "./HiddenStyle";

interface IHiddenOptional extends IComponentBaseProps {
  extraSmallDown: boolean;
  extraSmallUp: boolean;
  smallDown: boolean;
  smallUp: boolean;
  mediumDown: boolean;
  mediumUp: boolean;
  largeDown: boolean;
  largeUp: boolean;
  extraLargeDown: boolean;
  extraLargeUp: boolean;
  only: Breakpoint[];
}

interface IHiddenRequired {
  children: ((context: IComponentContext) => JSX.Element) | JSX.Element;
}

type IHiddenAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IHiddenArguments = Optional<IHiddenOptional> & Optional<IHiddenRequired>;

export type IHiddenProps = Partial<Optional<IHiddenOptional>> &
  IHiddenRequired &
  IHiddenAttributes;

const defaults: IHiddenArguments = {
  selector: "Hidden",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  extraSmallDown: false,
  extraSmallUp: false,
  smallDown: false,
  smallUp: false,
  mediumDown: false,
  mediumUp: false,
  largeDown: false,
  largeUp: false,
  extraLargeDown: false,
  extraLargeUp: false,
  only: [],
  children: undefined,
};

export function Hidden(args: IHiddenProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.extraSmallDown) yield "ExtraSmallDown";
      if (props.extraSmallUp) yield "ExtraSmallUp";
      if (props.smallDown) yield "SmallDown";
      if (props.smallUp) yield "SmallUp";
      if (props.mediumDown) yield "MediumDown";
      if (props.mediumUp) yield "MediumUp";
      if (props.largeDown) yield "LargeDown";
      if (props.largeUp) yield "LargeUp";
      if (props.extraLargeDown) yield "ExtraLargeDown";
      if (props.extraLargeUp) yield "ExtraLargeUp";
      for (const breakpoint of props.only!) yield `${breakpoint}Only`;
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

  const _hiddenContext = createMemo(
    () =>
      ({
        get class() {
          return _class();
        },
        get style() {
          return _style();
        },
        get disabled() {
          return props.disabled;
        },
      } as IComponentContext)
  );

  return (
    <ComponentContext.Provider value={_hiddenContext()}>
      {typeof props.children === "function"
        ? props.children(_hiddenContext())
        : props.children}
    </ComponentContext.Provider>
  );
}
