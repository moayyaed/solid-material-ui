import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useParams } from "../Core";

import "./PaperStyle";

interface IPaperOptional extends IComponentBaseProps {
  elevation: number;
  square: boolean;
}

interface IPaperRequired {
  children: JSX.Element;
}

type IPaperAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IPaperArguments = Optional<IPaperOptional> & Optional<IPaperRequired>;

export type IPaperProps = Partial<Optional<IPaperOptional>> &
  IPaperRequired &
  IPaperAttributes;

const defaults: IPaperArguments = {
  selector: "Paper",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  elevation: 1,
  square: false,
  children: undefined,
};

export function Paper(props: IPaperProps): JSX.Element {
  const componentContext = useComponentContext();
  const [params, others] = useParams(props, defaults);
  const { toClass, toStyle } = useCSS(params);

  const _disabled = () => params.disabled ?? componentContext?.disabled;

  const _component = () => params.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield `Elevation-${params.elevation}`;
      if (!params.square) yield "Rounded";
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
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      children={params.children}
    />
  );
}
