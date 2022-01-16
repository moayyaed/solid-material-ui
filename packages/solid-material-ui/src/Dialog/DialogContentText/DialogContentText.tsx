import type { JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Typography, TypographyVariant } from "../../Typography";

import "./DialogContentTextStyle";

interface IDialogContentTextOptional extends IComponentBaseProps {}

interface IDialogContentTextRequired {
  children: JSX.Element;
}

type IDialogContentTextAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IDialogContentTextArguments = Optional<IDialogContentTextOptional> &
  Optional<IDialogContentTextRequired>;

export type IDialogContentTextProps = Partial<
  Optional<IDialogContentTextOptional>
> &
  IDialogContentTextRequired &
  IDialogContentTextAttributes;

const defaults: IDialogContentTextArguments = {
  selector: "DialogContentText",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "p",
  children: undefined,
};

export function DialogContentText(args: IDialogContentTextProps): JSX.Element {
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
    <Typography
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      variant={TypographyVariant.Body1}
    >
      {props.children}
    </Typography>
  );
}
