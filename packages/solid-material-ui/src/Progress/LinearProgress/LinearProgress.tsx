import { JSX, Show } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color } from "../../Core";

import { LinearProgressVariant } from "./LinearProgressVariant";

import "./LinearProgressStyle";

interface ILinearProgressOptional extends IComponentBaseProps {
  variant: LinearProgressVariant;
  color: Color;
  value: number;
  valueBuffer: number;
  bar1Class: string;
  bar1Style: JSX.CSSProperties;
  bar2Class: string;
  bar2Style: JSX.CSSProperties;
  dashedClass: string;
  dashedStyle: JSX.CSSProperties;
}

interface ILinearProgressRequired {
}

type ILinearProgressAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type ILinearProgressArguments = Optional<ILinearProgressOptional> &
  Optional<ILinearProgressRequired>;

export type ILinearProgressProps = Partial<Optional<ILinearProgressOptional>> &
  ILinearProgressRequired &
  ILinearProgressAttributes;

const defaults: ILinearProgressArguments = {
  selector: "LinearProgress",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  variant: LinearProgressVariant.Indeterminate,
  color: Color.Primary,
  value: 0,
  valueBuffer: 0,
  bar1Class: undefined,
  bar1Style: undefined,
  bar2Class: undefined,
  bar2Style: undefined,
  dashedClass: undefined,
  dashedStyle: undefined,
};

export function LinearProgress(args: ILinearProgressProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const valueNow = () =>
    props.variant === LinearProgressVariant.Determinate ||
    (props.variant === LinearProgressVariant.Buffer && props.value)
      ? `${Math.round(props.value!)}`
      : "";

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.color === Color.Primary || props.color === Color.Secondary)
        yield `Color-${props.color}`;
      yield `${props.variant}`;
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

  const _bar1Class = toClass({
    *append() {
      yield "Bar";
      if (props.color === Color.Primary || props.color === Color.Secondary)
        yield `Bar-Color-${props.color}`;
      if (
        props.variant === LinearProgressVariant.Indeterminate ||
        props.variant === LinearProgressVariant.Query
      )
        yield "Bar1-Indeterminate";
      if (props.variant === LinearProgressVariant.Determinate)
        yield "Bar1-Determinate";
      if (props.variant === LinearProgressVariant.Buffer) yield "Bar1-Buffer";
    },
    *class() {
      yield props.bar1Class;
    },
  });

  const _bar1Style = toStyle({
    *style() {
      yield props.bar1Style;
    },
    *property() {
      if (
        props.variant === LinearProgressVariant.Determinate ||
        props.variant === LinearProgressVariant.Buffer
      ) {
        const transform = props.value! - 100;

        yield ["transform", `translateX(${transform})%`];
      }
    },
  });

  const _bar2Class = toClass({
    *append() {
      yield "Bar";
      if (props.color === Color.Primary || props.color === Color.Secondary) {
        if (props.variant !== LinearProgressVariant.Buffer)
          yield `Bar-Color-${props.color}`;
        else yield `Color-${props.color}`;
      }
      if (
        props.variant === LinearProgressVariant.Indeterminate ||
        props.variant === LinearProgressVariant.Query
      )
        yield "Bar2-Indeterminate";
      if (props.variant === LinearProgressVariant.Buffer) yield "Bar2-Buffer";
    },
    *class() {
      yield props.bar2Class;
    },
  });

  const _bar2Style = toStyle({
    *style() {
      yield props.bar2Style;
    },
    *property() {
      if (props.variant === LinearProgressVariant.Buffer) {
        const transform = props.valueBuffer! - 100;

        yield ["transform", `translateX(${transform})%`];
      }
    },
  });

  const _dashedClass = toClass({
    section: "Dashed",
    include: true,
    *append() {
      if (props.color === Color.Primary || props.color === Color.Secondary)
        yield `Color-${props.color}`;
    },
    *class() {
      yield props.dashedClass;
    },
  });

  const _dashedStyle = toStyle({
    *style() {
      yield props.dashedStyle;
    },
  });

  return (
    <Dynamic
      {...others}
      role="progressbar"
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      aria-valuenow={valueNow()}
    >
      <Show when={props.variant === LinearProgressVariant.Buffer}>
        <div class={_dashedClass()} style={_dashedStyle()} />
      </Show>
      <div class={_bar1Class()} style={_bar1Style()} />
      <Show when={props.variant !== LinearProgressVariant.Determinate}>
        <div class={_bar2Class()} style={_bar2Style()} />
      </Show>
    </Dynamic>
  );
}
