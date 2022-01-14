import { JSX, Show, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../Core";

import { useComponentContext, useCSS, useProps } from "../Core";

import { AvatarContext } from "./AvatarContext";

import "./AvatarStyle";

interface IAvatarOptional extends IComponentBaseProps {
  alt: string;
  src: string;
  srcset: string;
  sizes: string;
  imageClass: string | undefined;
  imageStyle: JSX.CSSProperties | undefined;
  imageProps: JSX.ImgHTMLAttributes<HTMLImageElement>;
  children: JSX.Element;
}

interface IAvatarRequired {
}

type IAvatarAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IAvatarArguments = Optional<IAvatarOptional> & Optional<IAvatarRequired>;

export type IAvatarProps = Partial<Optional<IAvatarOptional>> &
  IAvatarRequired &
  IAvatarAttributes;

const defaults: IAvatarArguments = {
  selector: "Avatar",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  alt: undefined,
  src: undefined,
  srcset: undefined,
  sizes: undefined,
  imageClass: undefined,
  imageStyle: undefined,
  imageProps: {},
  children: undefined,
};

export function Avatar(args: IAvatarProps): JSX.Element {
  const componentContext = useComponentContext();
  const avatarContext = useContext(AvatarContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _image = () => !!(props.src?.length || props.srcset?.length);

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (_image()) yield `Color-Default`;
    },
    *class() {
      yield props.class;
      yield props.className;
      yield componentContext?.class;
      yield avatarContext?.class;
    },
  });

  const _style = toStyle({
    *style() {
      yield props.style;
      yield componentContext?.style;
      yield avatarContext?.style;
    },
  });

  const _imageClass = toClass({
    section: "Image",
    include: true,
    *class() {
      yield props.imageClass;
    },
  });

  const _imageStyle = toStyle({
    *style() {
      yield props.imageStyle;
    },
  });

  const _imageProps = () => props.imageProps;

  return (
    <Dynamic
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
    >
      <Show when={_image()} fallback={props.children}>
        <img
          {..._imageProps()}
          class={_imageClass()}
          style={_imageStyle()}
          alt={props.alt}
          src={props.src}
          srcSet={props.srcset}
          sizes={props.sizes}
        />
      </Show>
    </Dynamic>
  );
}
