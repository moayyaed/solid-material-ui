import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color } from "../../Core";

import { CircularProgressVariant } from "./CircularProgressVariant";

import "./CircularProgressStyle";

interface ICircularProgressOptional extends IComponentBaseProps {
  variant: CircularProgressVariant;
  color: Color;
  disableShrink: boolean;
  size: number;
  value: number;
  thickness: number;
  svgClass: string;
  svgStyle: JSX.CSSProperties;
  circleClass: string;
  circleStyle: JSX.CSSProperties;
}

interface ICircularProgressRequired {
}

type ICircularProgressAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type ICircularProgressArguments = Optional<ICircularProgressOptional> &
  Optional<ICircularProgressRequired>;

export type ICircularProgressProps = Partial<
  Optional<ICircularProgressOptional>
> &
  ICircularProgressRequired &
  ICircularProgressAttributes;

const defaults: ICircularProgressArguments = {
  selector: "CircularProgress",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  variant: CircularProgressVariant.Indeterminate,
  color: Color.Primary,
  disableShrink: false,
  size: 40,
  value: 0,
  thickness: 3.6,
  svgClass: undefined,
  svgStyle: undefined,
  circleClass: undefined,
  circleStyle: undefined,
};

const SIZE = 44;

export function CircularProgress(args: ICircularProgressProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const valueNow = () => (props.value ? `${Math.round(props.value)}` : "");

  const viewBox = `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`;

  const cx = SIZE;

  const cy = SIZE;

  const radius = () => (SIZE - props.thickness!) / 2;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.color !== Color.Inherit) yield `Color-${props.color}`;
      if (
        props.variant === CircularProgressVariant.Indeterminate ||
        props.variant === CircularProgressVariant.Static
      )
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
    *property() {
      yield ["width", `${props.size}px`];
      yield ["height", `${props.size}px`];
      if (
        props.variant === CircularProgressVariant.Determinate ||
        props.variant === CircularProgressVariant.Static
      )
        yield [
          "transform",
          `rotate(${
            props.variant === CircularProgressVariant.Static
              ? -90
              : easeOut(props.value! / 70) * 270
          }deg)`,
        ];
    },
  });

  const _circleClass = toClass({
    section: "Circle",
    include: true,
    *append() {
      if (
        props.variant === CircularProgressVariant.Indeterminate ||
        props.variant === CircularProgressVariant.Static
      )
        yield `${props.variant}`;

      if (props.disableShrink) yield `DisableShrink`;
    },
    *class() {
      yield props.circleClass;
    },
  });

  const _circleStyle = toStyle({
    *style() {
      yield props.circleStyle;
    },
    *property() {
      if (
        props.variant === CircularProgressVariant.Determinate ||
        props.variant === CircularProgressVariant.Static
      ) {
        const circumference = 2 * Math.PI * radius();

        yield ["stroke-dasharray", circumference];

        const strokeDashoffset = `${
          props.variant === CircularProgressVariant.Static
            ? ((100 - props.value!) / 100) * circumference
            : easeIn((100 - props.value!) / 100) * circumference
        }px`;

        yield ["stroke-dashoffset", strokeDashoffset];
      }
    },
  });

  const _svgClass = toClass({
    section: "Svg",
    include: true,
    *class() {
      yield props.svgClass;
    },
  });

  const _svgStyle = toStyle({
    *style() {
      yield props.svgStyle;
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
      <svg class={_svgClass()} style={_svgStyle} viewBox={viewBox}>
        <circle
          class={_circleClass()}
          style={_circleStyle}
          cx={cx}
          cy={cy}
          r={radius()}
          stroke-width={props.thickness}
          fill="none"
        />
      </svg>
    </Dynamic>
  );

  function getRelative(value: number, min: number, max: number): number {
    return (Math.min(Math.max(min, value), max) - min) / (max - min);
  }

  function easeOut(value: number): number {
    let t = getRelative(value, 0, 1);
    // https://gist.github.com/gre/1650294
    t = (t -= 1) * t * t + 1;
    return t;
  }

  function easeIn(value: number): number {
    return value * value;
  }
}
