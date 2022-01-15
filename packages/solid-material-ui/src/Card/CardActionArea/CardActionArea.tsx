import type { JSX } from "solid-js";

import type {
  IComponentBaseProps,
  Optional,
  IComponentContext,
} from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { ButtonBase } from "../../Button";

import "./CardActionAreaStyle";

interface ICardActionAreaOptional extends IComponentBaseProps {
  focusVisibleClass: string | undefined;
  highlightClass: string | undefined;
  highlightStyle: JSX.CSSProperties | undefined;
}

interface ICardActionAreaRequired {
  children: JSX.Element;
}

type ICardActionAreaAttributes = Omit<
  JSX.HTMLAttributes<HTMLButtonElement>,
  "children"
>;

type ICardActionAreaArguments = Optional<ICardActionAreaOptional> &
  Optional<ICardActionAreaRequired>;

export type ICardActionAreaProps = Partial<Optional<ICardActionAreaOptional>> &
  ICardActionAreaRequired &
  ICardActionAreaAttributes;

const defaults: ICardActionAreaArguments = {
  selector: "CardActionArea",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: undefined,
  focusVisibleClass: undefined,
  highlightClass: undefined,
  highlightStyle: undefined,
  children: undefined,
};

export function CardActionArea(args: ICardActionAreaProps): JSX.Element {
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

  const _highlightClass = toClass({
    section: "Highlight",
    include: true,
    *class() {
      yield props.highlightClass;
    },
  });

  const _highlightStyle = toStyle({
    *style() {
      yield props.highlightStyle;
    },
  });

  return (
    <ButtonBase
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      focusVisibleClass={props.focusVisibleClass}
    >
      {
        ((context: IComponentContext) => (
          <>
            {props.children}
            <span class={_highlightClass()} style={_highlightStyle()} />
          </>
        )) as any
      }
    </ButtonBase>
  );
}
