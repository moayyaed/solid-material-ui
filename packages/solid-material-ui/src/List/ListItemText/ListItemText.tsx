import { JSX, Show, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color } from "../../Core";

import type { ITypographyProps } from "../../Typography";
import { Typography, TypographyVariant } from "../../Typography";

import { ListItemContext } from "../ListItem/ListItemContext";

import "./ListItemTextStyle";

interface IListItemTextOptional extends IComponentBaseProps {
  primary: JSX.Element;
  secondary: JSX.Element;
  inset: boolean;
  disableTypography: boolean;
  primaryClass: string | undefined;
  primaryStyle: JSX.CSSProperties | undefined;
  secondaryClass: string | undefined;
  secondaryStyle: JSX.CSSProperties | undefined;
  primaryTypographyProps: Partial<ITypographyProps>;
  secondaryTypographyProps: Partial<ITypographyProps>;
}

interface IListItemTextRequired {}

type IListItemTextAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IListItemTextArguments = Optional<IListItemTextOptional> &
  Optional<IListItemTextRequired>;

export type IListItemTextProps = Partial<Optional<IListItemTextOptional>> &
  IListItemTextRequired &
  IListItemTextAttributes;

const defaults: IListItemTextArguments = {
  selector: "ListItemText",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  primary: undefined,
  secondary: undefined,
  inset: false,
  disableTypography: false,
  primaryClass: undefined,
  primaryStyle: undefined,
  secondaryClass: undefined,
  secondaryStyle: undefined,
  primaryTypographyProps: {},
  secondaryTypographyProps: {},
};

export function ListItemText(args: IListItemTextProps): JSX.Element {
  const componentContext = useComponentContext();
  const listItemContext = useContext(ListItemContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled ?? listItemContext?.disabled;

  const _component = () => props.component;

  const isDense = () => listItemContext?.dense ?? false;

  const _primaryVariant = () =>
    isDense() ? TypographyVariant.Body2 : TypographyVariant.Body1;

  const _secondaryVariant = () => TypographyVariant.Body2;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (isDense()) yield "Dense";
      if (props.inset) yield "Inset";
      if (props.primary && props.secondary) yield "Multiline";
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
  });

  const _primaryClass = toClass({
    section: "Primary",
    include: true,
    *class() {
      yield props.primaryClass;
    },
  });

  const _primaryStyle = toStyle({
    *style() {
      yield props.primaryStyle;
    },
  });

  const _secondaryClass = toClass({
    section: "Secondary",
    include: true,
    *class() {
      yield props.secondaryClass;
    },
  });

  const _secondaryStyle = toStyle({
    *style() {
      yield props.secondaryStyle;
    },
  });

  const primaryTypographyProps = () => props.primaryTypographyProps;

  const secondaryTypographyProps = () => props.secondaryTypographyProps;

  return (
    <Dynamic
      {...others}
      component={props.component}
      disabled={props.disabled}
      class={_class()}
      style={_style()}
    >
      <Show when={!props.disableTypography} fallback={props.primary}>
        <Typography
          component="span"
          class={_primaryClass()}
          style={_primaryStyle()}
          variant={_primaryVariant()}
          {...primaryTypographyProps()}
        >
          {props.primary}
        </Typography>
      </Show>
      <Show when={!props.disableTypography} fallback={props.secondary}>
        <Typography
          color={Color.TextSecondary}
          class={_secondaryClass()}
          style={_secondaryStyle()}
          variant={_secondaryVariant()}
          {...secondaryTypographyProps()}
        >
          {props.secondary}
        </Typography>
      </Show>
    </Dynamic>
  );
}
