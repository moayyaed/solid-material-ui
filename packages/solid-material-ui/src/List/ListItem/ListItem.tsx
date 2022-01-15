import {
  JSX,
  Component,
  useContext,
  createEffect,
  createMemo,
  Show,
} from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { AlignItems } from "../../Core";

import { ButtonBase } from "../../Button";

import { ListContext } from "../List/ListContext";

import { IListItemContext, ListItemContext } from "./ListItemContext";

import "./ListItemStyle";

interface IListItemOptional extends IComponentBaseProps {
  nowrap: boolean;
  alignItems: AlignItems;
  autoFocus: boolean;
  button: boolean;
  dense: boolean | undefined;
  disableGutters: boolean;
  divider: boolean;
  focusVisbleClass: string | undefined;
  secondaryAction: JSX.Element;
  selected: boolean;
  containerComponent: Component<any> | string | keyof JSX.IntrinsicElements;
  containerClass: string | undefined;
  containerStyle: JSX.CSSProperties | undefined;
  denseClass: string | undefined;
  denseStyle: JSX.CSSProperties | undefined;
}

interface IListItemRequired {
  children: ((context: IListItemContext) => JSX.Element) | JSX.Element;
}

type IListItemAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IListItemArguments = Optional<IListItemOptional> &
  Optional<IListItemRequired>;

export type IListItemProps = Partial<Optional<IListItemOptional>> &
  IListItemRequired &
  IListItemAttributes;

const defaults: IListItemArguments = {
  selector: "ListItem",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: undefined,
  nowrap: false,
  alignItems: AlignItems.Center,
  autoFocus: false,
  button: false,
  dense: undefined,
  disableGutters: false,
  divider: false,
  focusVisbleClass: undefined,
  secondaryAction: undefined,
  selected: false,
  containerComponent: "li",
  containerClass: undefined,
  containerStyle: undefined,
  denseClass: undefined,
  denseStyle: undefined,
  children: undefined,
};

export function ListItem(args: IListItemProps): JSX.Element {
  const componentContext = useComponentContext();
  const listContext = useContext(ListContext);
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled ?? listContext?.disabled;

  const _component = () => {
    let component = props.component ?? "li";
    if (!component && props.button) component = "div";
    if (
      component === "li" &&
      props.secondaryAction &&
      props.containerComponent === "li"
    )
      component = "div";
    return component;
  };

  const _dense = () => props.dense ?? listContext?.dense ?? false;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      if (_dense()) yield "Dense";
      if (_dense() && props.denseClass) yield `~${props.denseClass}`;
      if (!props.disableGutters) yield "Gutters";
      if (props.divider) yield "Divider";
      if (props.button) yield "Button";
      if (props.alignItems === AlignItems.FlexStart)
        yield `AlignItems-${props.alignItems}`;
      if (props.secondaryAction) yield "SecondaryAction";
      if (props.selected) yield "Selected";
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
    *property() {
      if (_dense()) {
        for (const entry of Object.entries(props.denseStyle ?? {})) yield entry;
      }
    },
  });

  const _containerClass = toClass({
    section: "Container",
    include: true,
    *class() {
      yield props.containerClass;
    },
  });

  const _containerStyle = toStyle({
    *style() {
      yield props.containerStyle;
    },
  });

  const _focusVisbleClass = toClass({
    section: "FocusVisible",
    include: true,
    *class() {
      yield props.focusVisbleClass;
    },
  });

  let ref: HTMLElement | undefined;

  createEffect(() => {
    const autoFocus = props.autoFocus;
    if (autoFocus) {
      ref?.focus();
    }
  });

  const _listItemContext = createMemo(() => {
    return {
      get class() {
        return _class();
      },
      get style() {
        return _style();
      },
      get disabled() {
        return props.disabled;
      },
      get dense() {
        return _dense();
      },
      get alignItems() {
        return props.alignItems;
      },
      get button() {
        return props.button;
      },
      get focusVisibleClass() {
        return _focusVisbleClass();
      },
      onClick: (event: MouseEvent) =>
        (others.onClick as (event: MouseEvent) => void)?.(event),
    } as IListItemContext;
  });

  const content = (
    <Show
      when={props.button}
      fallback={
        <Dynamic
          {...others}
          ref={(r: HTMLElement | undefined) => (ref = r)}
          component={_component()}
          disabled={props.disabled}
          class={_class()}
          style={_style()}
          nowrap={props.nowrap}
        >
          {typeof props.children === "function"
            ? props.children(_listItemContext())
            : props.children}
        </Dynamic>
      }
    >
      <ButtonBase
        {...(others as any)}
        component={_component()}
        disabled={props.disabled}
        class={_class()}
        style={_style()}
        focusVisible={props.autoFocus}
        focusVisibleClass={_focusVisbleClass()}
      >
        {(c) =>
          typeof props.children === "function"
            ? props.children(_listItemContext())
            : props.children
        }
      </ButtonBase>
    </Show>
  );

  return (
    <ListItemContext.Provider value={_listItemContext()}>
      <Show when={props.secondaryAction} fallback={content}>
        <Dynamic
          {...others}
          ref={(r: HTMLElement | undefined) => (ref = r)}
          component={props.containerComponent}
          disabled={props.disabled}
          class={_containerClass()}
          style={_containerStyle()}
        >
          {content}
          {props.secondaryAction}
        </Dynamic>
      </Show>
    </ListItemContext.Provider>
  );
}
