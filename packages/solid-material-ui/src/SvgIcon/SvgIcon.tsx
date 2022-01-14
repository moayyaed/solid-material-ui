import { JSX, Show, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { Color, FontSize } from "../Core";

import { SvgIconContext } from "./SvgIconContext";

import "./SvgIconStyle";

interface ISvgIconOptional extends IComponentBaseProps {
  htmlColor: string;
  title: string;
  viewBox: string;
  color: Color;
  fontSize: FontSize;
}

interface ISvgIconRequired {
  children: JSX.Element;
}

type ISvgIconAttributes = Omit<JSX.SvgSVGAttributes<SVGSVGElement>, "children">;

type ISvgIconArguments = Optional<ISvgIconOptional> &
  Optional<ISvgIconRequired>;

export type ISvgIconProps = Partial<Optional<ISvgIconOptional>> &
  ISvgIconRequired &
  ISvgIconAttributes;

const defaults: ISvgIconArguments = {
  selector: "SvgIcon",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  component: "svg",
  class: undefined,
  style: undefined,
  htmlColor: undefined,
  title: undefined,
  viewBox: "0 0 24 24",
  color: Color.Inherit,
  fontSize: FontSize.Default,
  children: undefined,
};

export function SvgIcon(args: ISvgIconProps): JSX.Element {
  const componentContext = useComponentContext();
  const svgIconContext = useContext(SvgIconContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (props.disabled) yield "Disabled";
      if (props.color !== Color.Inherit) yield `Color-${props.color}`;
      if (props.fontSize !== FontSize.Default)
        yield `FontSize-${props.fontSize}`;
    },
    *class() {
      yield props.class;
      yield props.className;
      yield componentContext?.class;
      yield svgIconContext?.class;
    },
  });

  const _style = toStyle({
    *style() {
      yield props.style;
      yield componentContext?.style;
      yield svgIconContext?.style;
    },
  });

  const hidden = () => !props.title;

  return (
    <Dynamic
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      viewBox={props.viewBox}
      color={props.htmlColor}
      aria-hidden={hidden()}
    >
      <Show when={hidden()}>
        <title>{props.title}</title>
      </Show>
      {props.children}
    </Dynamic>
  );
}
