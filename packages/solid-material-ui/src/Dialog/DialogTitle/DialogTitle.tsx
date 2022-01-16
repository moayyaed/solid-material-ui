import { JSX, Show } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Typography, TypographyVariant } from "../../Typography";

import "./DialogTitleStyle";

interface IDialogTitleOptional extends IComponentBaseProps {
  disableTypography: boolean;
}

interface IDialogTitleRequired {
  children: JSX.Element;
}

type IDialogTitleAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IDialogTitleArguments = Optional<IDialogTitleOptional> &
  Optional<IDialogTitleRequired>;

export type IDialogTitleProps = Partial<Optional<IDialogTitleOptional>> &
  IDialogTitleRequired &
  IDialogTitleAttributes;

const defaults: IDialogTitleArguments = {
  selector: "DialogTitle",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  disableTypography: undefined,
  children: undefined,
};

export function DialogTitle(args: IDialogTitleProps): JSX.Element {
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

  return (
    <Dynamic
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
    >
      <Show when={props.disableTypography} fallback={props.children}>
        <Typography component={"h2"} variant={TypographyVariant.H6}>
          {props.children}
        </Typography>
      </Show>
    </Dynamic>
  );
}
