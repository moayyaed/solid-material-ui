import { JSX, Show } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color, Display } from "../../Core";

import { Typography, TypographyVariant } from "../../Typography";

import "./CardHeaderStyle";

interface ICardHeaderOptional extends IComponentBaseProps {
  title: JSX.Element;
  subheader: JSX.Element;
  avatar: JSX.Element;
  action: JSX.Element;
  avatarClass: string;
  avatarStyle: JSX.CSSProperties;
  actionClass: string;
  actionStyle: JSX.CSSProperties;
  contentClass: string;
  contentStyle: JSX.CSSProperties;
  titleClass: string;
  titleStyle: JSX.CSSProperties;
  subheaderClass: string;
  subheaderStyle: JSX.CSSProperties;
}

interface ICardHeaderRequired {
  children: JSX.Element;
}

type ICardHeaderAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type ICardHeaderArguments = Optional<ICardHeaderOptional> &
  Optional<ICardHeaderRequired>;

export type ICardHeaderProps = Partial<Optional<ICardHeaderOptional>> &
  ICardHeaderRequired &
  ICardHeaderAttributes;

const defaults: ICardHeaderArguments = {
  selector: "CardHeader",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  title: undefined,
  subheader: undefined,
  avatar: undefined,
  action: undefined,
  avatarClass: undefined,
  avatarStyle: undefined,
  actionClass: undefined,
  actionStyle: undefined,
  contentClass: undefined,
  contentStyle: undefined,
  titleClass: undefined,
  titleStyle: undefined,
  subheaderClass: undefined,
  subheaderStyle: undefined,
  children: undefined,
};

export function CardHeader(args: ICardHeaderProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
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

  const _avatarClass = toClass({
    section: "Avatar",
    include: true,
    *class() {
      yield props.avatarClass;
    },
  });

  const _avatarStyle = toStyle({
    *style() {
      yield props.avatarStyle;
    },
  });

  const _actionClass = toClass({
    section: "Action",
    include: true,
    *class() {
      yield props.actionClass;
    },
  });

  const _actionStyle = toStyle({
    *style() {
      yield props.actionStyle;
    },
  });

  const _contentClass = toClass({
    section: "Content",
    include: true,
    *class() {
      yield props.contentClass;
    },
  });

  const _contentStyle = toStyle({
    *style() {
      yield props.contentStyle;
    },
  });

  const _titleClass = toClass({
    section: "Title",
    include: true,
    *class() {
      yield props.titleClass;
    },
  });

  const _titleStyle = toStyle({
    *style() {
      yield props.titleStyle;
    },
  });

  const _subheaderClass = toClass({
    section: "Subheader",
    include: true,
    *class() {
      yield props.subheaderClass;
    },
  });

  const _subheaderStyle = toStyle({
    *style() {
      yield props.subheaderStyle;
    },
  });

  const _hasAvatarContent = () =>
    props.avatar && typeof props.avatar !== "string";

  const _hasActionContent = () =>
    props.action && typeof props.action !== "string";

  const _hasTitleContent = () => props.title && typeof props.title !== "string";

  const _hasSubheaderContent = () =>
    props.subheader && typeof props.subheader !== "string";

  const _titleVariant = () =>
    _hasActionContent() ? TypographyVariant.Body2 : TypographyVariant.H5;

  const _subheaderVariant = () =>
    _hasAvatarContent() ? TypographyVariant.Body2 : TypographyVariant.Body1;

  return (
    <Dynamic
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
    >
      <Show when={_hasAvatarContent()}>
        <div class={_avatarClass()} style={_avatarStyle()}>
          {props.avatar}
        </div>
      </Show>
      <div class={_contentClass()} style={_contentStyle()}>
        <Show
          when={_hasTitleContent()}
          fallback={
            <Typography
              component="span"
              class={_titleClass()}
              style={_titleStyle()}
              display={Display.Block}
              variant={_titleVariant()}
            >
              {props.title}
            </Typography>
          }
        >
          {props.title}
        </Show>
        <Show
          when={_hasSubheaderContent()}
          fallback={
            <Typography
              component="span"
              class={_subheaderClass()}
              style={_subheaderStyle()}
              display={Display.Block}
              variant={_subheaderVariant()}
              color={Color.TextSecondary}
            >
              {props.subheader}
            </Typography>
          }
        >
          {props.subheader}
        </Show>
      </div>
      <Show when={_hasActionContent()}>
        <div class={_actionClass()} style={_actionStyle()}>
          {props.action}
        </div>
      </Show>
    </Dynamic>
  );
}
