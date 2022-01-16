import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { TypographyVariant } from "../../Typography";

import "./DialogActionsStyle";

interface IDialogActionsOptional extends IComponentBaseProps {}

interface IDialogActionsRequired {
  children: JSX.Element;
}

type IDialogActionsAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IDialogActionsArguments = Optional<IDialogActionsOptional> &
  Optional<IDialogActionsRequired>;

export type IDialogActionsProps = Partial<Optional<IDialogActionsOptional>> &
  IDialogActionsRequired &
  IDialogActionsAttributes;

const defaults: IDialogActionsArguments = {
  selector: "DialogActions",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "p",
  children: undefined,
};

export function DialogActions(args: IDialogActionsProps): JSX.Element {
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
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      variant={TypographyVariant.Body1}
    >
      {props.children}
    </Dynamic>
  );
}
