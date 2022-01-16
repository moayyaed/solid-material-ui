import { JSX, Show, useContext } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Color, Margin, ControlVariant } from "../../Core";

import { FormControlContext } from "../../Form";

import { Typography } from "../../Typography";

import { InputPosition } from "./InputPosition";

import "./InputAdornmentStyle";

interface IInputAdornmentOptional extends IComponentBaseProps {
  position: InputPosition;
  disablePointerEvents: boolean | undefined;
  disableTypography: boolean | undefined;
  adornment: string | undefined;
  variant: ControlVariant | undefined;
}

interface IInputAdornmentRequired {
  children: JSX.Element;
}

type IInputAdornmentAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

type IInputAdornmentArguments = Optional<IInputAdornmentOptional> &
  Optional<IInputAdornmentRequired>;

export type IInputAdornmentProps = Partial<Optional<IInputAdornmentOptional>> &
  IInputAdornmentRequired &
  IInputAdornmentAttributes;

const defaults: IInputAdornmentArguments = {
  selector: "InputAdornment",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  variant: undefined,
  position: InputPosition.Start,
  disablePointerEvents: undefined,
  disableTypography: undefined,
  adornment: undefined,
  children: undefined,
};

export function InputAdornment(args: IInputAdornmentProps): JSX.Element {
  const componentContext = useComponentContext();
  const formControlContext = useContext(FormControlContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const _renderTypography = () => !!props.adornment && !props.disableTypography;

  const _class = toClass({
    *append() {
      yield "Root";
      if (props.disabled) yield "Disabled";
      yield `Position-${props.position}`;
      if (props.variant === ControlVariant.Filled) yield `${props.variant}`;
      if (props.disablePointerEvents) yield "DisablePointerEvents";
      if (props.disableTypography) yield "DisableTypography";
      if (formControlContext?.margin === Margin.Dense)
        yield `Margin-${formControlContext?.margin}`;
      if (formControlContext?.hiddenLabel) yield `HiddenLabel`;
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
    <FormControlContext.Provider value={{}}>
      <Dynamic
        {...others}
        ref={props.ref}
        component={_component()}
        disabled={_disabled()}
        class={_class()}
        style={_style()}
      >
        <Show when={_renderTypography()} fallback={props.children}>
          <Typography color={Color.TextSecondary}>{props.adornment}</Typography>
        </Show>
      </Dynamic>
    </FormControlContext.Provider>
  );
}
