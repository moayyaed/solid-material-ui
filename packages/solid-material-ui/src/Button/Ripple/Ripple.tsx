import { createEffect, createSignal, JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import "./RippleStyle";

interface IRippleOptional extends IComponentBaseProps {
  in: boolean;
  pulsate: boolean;
  horizontal: number;
  vertical: number;
  size: number;
  timeout: number;
  childClass: string | undefined;
  childStyle: JSX.CSSProperties | undefined;
  onExited: ((ref?: HTMLElement) => void) | undefined;
}

interface IRippleRequired {}

type IRippleAttributes = Omit<JSX.HTMLAttributes<HTMLSpanElement>, "children">;

type IRippleArguments = Optional<IRippleOptional> & Optional<IRippleRequired>;

export type IRippleProps = Partial<Optional<IRippleOptional>> &
  IRippleRequired &
  IRippleAttributes;

const defaults: IRippleArguments = {
  selector: "Ripple",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "span",
  in: false,
  pulsate: false,
  horizontal: 0,
  vertical: 0,
  size: 0,
  timeout: 100,
  childClass: undefined,
  childStyle: undefined,
  onExited: undefined,
};

export function Ripple(args: IRippleProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const [leaving, setLeaving] = createSignal(false);

  const width = () => props.size;
  const height = () => props.size;
  const top = () => -(props.size! / 2) + props.vertical!;
  const left = () => -(props.size! / 2) + props.horizontal!;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield "Visible";
      if (props.pulsate) yield `Pulstate`;
    },
    *class() {
      yield props.class;
      yield props.className;
    },
  });

  const _style = toStyle({
    *style() {
      yield props.style;
    },
    *property() {
      yield ["width", `${width()}px`];
      yield ["height", `${height()}px`];
      yield ["top", `${top()}px`];
      yield ["left", `${left()}px`];
    },
  });

  const _childClass = toClass({
    section: "Child",
    include: true,
    *append() {
      if (leaving()) yield "Leaving";
      if (props.pulsate) yield "Pulsate";
    },
    *class() {
      yield props.childClass;
    },
  });

  const _childStyle = toStyle({
    *style() {
      yield props.childStyle;
    },
  });

  let span: HTMLSpanElement | undefined;

  const _handleRef = (ref: HTMLSpanElement | undefined) => {
    span = ref;
    props.ref?.(ref);
  };

  function onLeaving() {
    setLeaving(true);
    setTimeout(() => props?.onExited?.(span), props.timeout);
  }

  createEffect(() => {
    const propIn = props.in;
    if (!propIn) {
      onLeaving();
    }
  });

  return (
    <Dynamic
      {...others}
      ref={_handleRef}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
    >
      <span class={_childClass()} style={_childStyle()} />
    </Dynamic>
  );
}
