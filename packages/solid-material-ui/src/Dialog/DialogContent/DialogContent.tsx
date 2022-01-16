import type { JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Typography, TypographyVariant } from "../../Typography";

import "./DialogContentStyle";

interface IDialogContentOptional extends IComponentBaseProps {
  dividers: boolean;
}

interface IDialogContentRequired {
  children: JSX.Element;
}

type IDialogContentAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IDialogContentArguments = Optional<IDialogContentOptional> &
  Optional<IDialogContentRequired>;

export type IDialogContentProps = Partial<Optional<IDialogContentOptional>> &
  IDialogContentRequired &
  IDialogContentAttributes;

const defaults: IDialogContentArguments = {
  selector: "DialogContent",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  dividers: undefined,
  children: undefined,
};

export function DialogContent(args: IDialogContentProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (props.dividers) yield "Dividers";
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
