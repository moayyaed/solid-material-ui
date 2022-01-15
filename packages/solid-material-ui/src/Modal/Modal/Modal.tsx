import { createEffect, createSignal, JSX, onCleanup, Show } from "solid-js";

import { Dynamic } from "solid-js/web";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { IModalContext } from "./ModalContext";

import { ModalCloseReason } from "./ModalCloseReason";

import { Portal } from "../../Portal";

import { TrapFocus } from "../TrapFocus";

interface IModalOptional extends IComponentBaseProps {
  backdrop: (context: IModalContext) => JSX.Element;
  disablePortal: boolean;
  portalTarget: HTMLElement;
  portalTargetBody: HTMLElement;
  open: boolean;
  absolute: boolean;
  closeAfterTransition: boolean;
  disableAutoFocus: boolean;
  disableBackdropClick: boolean;
  disableEnforceFocus: boolean;
  disableEscapeKeyDown: boolean;
  disableRestoreFocus: boolean;
  disableScrollLock: boolean;
  hideBackdrop: boolean;
  keepMounted: boolean;
  backdropInvisible: boolean;
  backdropClass: string;
  backdropStyle: JSX.CSSProperties;
  hasTransition: boolean;
  onBackdropClick: () => void;
  onClose: (reason: ModalCloseReason) => void;
  onEscapeKeyDown: () => void;
  onRendered: () => void;
}

interface IModalRequired {
  children: (context: IModalContext) => JSX.Element;
}

type IModalAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IModalArguments = Optional<IModalOptional> & Optional<IModalRequired>;

export type IModalProps = Partial<Optional<IModalOptional>> &
  IModalRequired &
  IModalAttributes;

const defaults: IModalArguments = {
  selector: "Modal",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  backdrop: undefined,
  disablePortal: undefined,
  portalTarget: undefined,
  portalTargetBody: undefined,
  open: undefined,
  absolute: undefined,
  closeAfterTransition: undefined,
  disableAutoFocus: undefined,
  disableBackdropClick: undefined,
  disableEnforceFocus: undefined,
  disableEscapeKeyDown: undefined,
  disableRestoreFocus: undefined,
  disableScrollLock: undefined,
  hideBackdrop: undefined,
  keepMounted: undefined,
  backdropInvisible: undefined,
  backdropClass: undefined,
  backdropStyle: undefined,
  onBackdropClick: undefined,
  hasTransition: undefined,
  onClose: undefined,
  onEscapeKeyDown: undefined,
  onRendered: undefined,
  children: undefined,
};

export function Modal(args: IModalProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;

  const [exited, setExited] = createSignal(false);

  let _ref: HTMLElement | undefined;

  const _handleRef = (ref: HTMLElement | undefined) => {
    _ref = ref;
    props.ref?.(_ref);
  };

  const handleClose = () => {
    // TODO: remove from manager
  };

  const handleOpen = () => {
    // TODO: add to manager
  };

  const handleEnter = (args: HTMLElement | undefined) => {
    setExited(false);
  };

  const handleExited = (args: HTMLElement | undefined) => {
    setExited(true);
    if (props.closeAfterTransition) {
      handleClose();
    }
  };

  const isTopModal = () => true;

  const handleBackdropClick = () => {
    props.onBackdropClick?.();
    if (props.disableBackdropClick) {
      props.onClose?.(ModalCloseReason.BackdropClick);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isTopModal) {
      props.onEscapeKeyDown?.();
      if (!props.disableEscapeKeyDown) {
        props.onClose?.(ModalCloseReason.Escape);
      }
    }
  };

  createEffect(() => {
    const open = props.open;
    if (open) {
      handleOpen();
    } else if (!props.hasTransition || !props.closeAfterTransition) {
      handleClose();
    }
  });

  onCleanup(() => handleClose());

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
    *property() {
      yield ["position", props.absolute ? "absolute" : "fixed"];
      yield ["z-index", "10000"];
      yield ["right", "0"];
      yield ["bottom", "0"];
      yield ["top", "0"];
      yield ["left", "0"];
      if (!props.open) yield ["visibility", "hidden"];
    },
  });

  const _backdropClass = toClass({
    section: "Backdrop",
    include: true,
    *class() {
      yield props.backdropClass;
    },
  });

  const _backdropStyle = toStyle({
    *style() {
      yield props.backdropStyle;
    },
    *property() {
      if (props.absolute) yield ["position", "absolute"];
    },
  });

  const context: IModalContext = {
    get ref() {
      return _handleRef;
    },
    get class() {
      return undefined;
    },
    get style() {
      return undefined;
    },
    get disabled() {
      return props.disabled;
    },
    get open() {
      return props.open;
    },
    get backdropInvisible() {
      return props.backdropInvisible;
    },
    get backdropClass() {
      return _backdropClass();
    },
    get backdropStyle() {
      return _backdropStyle();
    },
    get onEnter() {
      return handleEnter;
    },
    get onExited() {
      return handleExited;
    },
    get onBackdropClick() {
      return handleBackdropClick;
    },
  };

  return (
    <Portal
      disabled={props.disabled}
      target={props.portalTarget}
      targetBody={props.portalTargetBody}
    >
      <Dynamic
        {...others}
        data-mui-test="Modal"
        role="presentation"
        ref={props.ref}
        component={_component()}
        class={_class()}
        style={_style()}
        onKeyDown={handleKeyDown}
      >
        <Show when={!props.hideBackdrop}>{props.backdrop?.(context)}</Show>
        <TrapFocus
          disableEnforceFocus={props.disableEnforceFocus}
          disableAutoFocus={props.disableAutoFocus}
          disableRestoreFocus={props.disableRestoreFocus}
          isEnabled={isTopModal()}
          open={props.open}
        >
          {(trfocus) => props.children?.(context)}
        </TrapFocus>
      </Dynamic>
    </Portal>
  );
}
