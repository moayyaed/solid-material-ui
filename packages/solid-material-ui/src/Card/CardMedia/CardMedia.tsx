import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import "./CardMediaStyle";

interface ICardMediaOptional extends IComponentBaseProps {
  image: string;
  src: string;
  title: string;
  children: JSX.Element;
}

interface ICardMediaRequired {
}

type ICardMediaAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type ICardMediaArguments = Optional<ICardMediaOptional> &
  Optional<ICardMediaRequired>;

export type ICardMediaProps = Partial<Optional<ICardMediaOptional>> &
  ICardMediaRequired &
  ICardMediaAttributes;

const defaults: ICardMediaArguments = {
  selector: "CardMedia",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  image: undefined,
  src: undefined,
  title: undefined,
  children: undefined,
};

export function CardMedia(args: ICardMediaProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const medias: string[] = ["video", "audio", "picture", "iframe", "img"];

  const images: string[] = ["picture", "img"];

  const _media = () => medias.includes(String(props.component));

  const _image = () => images.includes(String(props.component));

  const _imageOnly = () => !_media() && !!props.image?.length;

  const _src = () =>
    _media() ? (!!props.image?.length ? props.image : props.src) : undefined;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (_media()) yield "Media";
      if (_image()) yield "Image";
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
      if (_imageOnly()) yield ["background-image", `url("${props.image}")`];
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
      src={_src()}
      title={props.title}
    >
      {props.children}
    </Dynamic>
  );
}
