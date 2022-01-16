import type { JSX } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { MaxWidth } from "../../Core";

import { Modal, ModalCloseReason, Backdrop } from "../../Modal";

import { Fade } from "../../Transition";

import { Paper } from "../../Paper";

import { DialogScroll } from "./DialogScroll";

import "./DialogStyle";

interface IDialogOptional extends IComponentBaseProps {

  transitionDuration: number;
  appearTimeout: number;
  enterTimeoout: number;
  exitTimeout: number;
  open: boolean;
  backdropInvisible: boolean;
  disableBackdropClick: boolean;
  disableEscapeKeyDown: boolean;
  fullScreen: boolean;
  fullWidth: boolean;
  maxWidth: MaxWidth;
  container: HTMLElement;
  onBackdropClick: (() => void);
  onEscapeKeyDown: (() => void);
  onClose: ((reason?: ModalCloseReason) => void);
  backdropClass: string;
  backdropStyle: JSX.CSSProperties;
  absolute: boolean;
  scroll: DialogScroll;
  containerClass: string;
  containerStyle: JSX.CSSProperties;
  paperClass: string;
  paperStyle: JSX.CSSProperties;
  elevation: number;
  square: boolean;
}

interface IDialogRequired {
  children: JSX.Element;
}

type IDialogAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IDialogArguments = Optional<IDialogOptional> & Optional<IDialogRequired>;

export type IDialogProps = Partial<Optional<IDialogOptional>> &
  IDialogRequired &
  IDialogAttributes;

const defaults: IDialogArguments = {
  selector: "Dialog",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  transitionDuration: undefined,
  appearTimeout: undefined,
  enterTimeoout: undefined,
  exitTimeout: undefined,
  open: undefined,
  backdropInvisible: undefined,
  disableBackdropClick: undefined,
  disableEscapeKeyDown: undefined,
  container: undefined,
  onClose: undefined,
  fullScreen: undefined,
  fullWidth: undefined,
  maxWidth: MaxWidth.Small,
  onBackdropClick: undefined,
  onEscapeKeyDown: undefined,
  backdropClass: undefined,
  backdropStyle: undefined,
  absolute: undefined,
  scroll: DialogScroll.Paper,
  containerClass: undefined,
  containerStyle: undefined,
  paperClass: undefined,
  paperStyle: undefined,
  elevation: 24,
  square: true,
  children: undefined,
};

export function Dialog(args: IDialogProps): JSX.Element {
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

  const _containerClass = toClass({
    *class() {
      yield props.containerClass;
    },
    *append() {
      yield "Container";
      yield `Scroll-${props.scroll}`;
    },
  });

  const _containerStyle = toStyle({
    *style() {
      yield props.containerStyle;
    },
  });

  const _paperClass = toClass({
    section: "Paper",
    include: true,
    *class() {
      yield props.paperClass;
    },
    *append() {
      yield `Scroll-${props.scroll}`;
      yield `Width-${props.maxWidth}`;
      if (props.fullScreen) yield "FullScreen";
      if (props.fullWidth) yield "FullWidth";
    },
  });

  const _paperStyle = toStyle({
    *style() {
      yield props.paperStyle;
    },
    *property() {
      if (props.absolute) yield ["position", "relative"];
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
  });

  return (
    <Modal
      {...(others as any)}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      absolute={props.absolute}
      open={props.open}
      closeAfterTransition
      backdropClass={_backdropClass()}
      backdropStyle={_backdropStyle()}
      portalTarget={props.container}
      onClose={props.onClose}
      disableBackdropClick={props.disableBackdropClick}
      disableEscapeKeyDown={props.disableEscapeKeyDown}
      onBackdropClick={props.onBackdropClick}
      onEscapeKeyDown={props.onEscapeKeyDown}
      backdropInvisible={props.backdropInvisible}
      backdrop={(context) => (
        <Backdrop
          class={context.backdropClass}
          style={context.backdropStyle}
          open={context.open}
          invisible={context.backdropInvisible}
          onClick={context.onBackdropClick}
        />
      )}
    >
      {(context) => (
        <Fade
          ref={context.ref}
          class={_containerClass()}
          style={_containerStyle()}
          in={context.open}
          appear
          transitionDelay={props.transitionDuration}
          appearTimeout={props.appearTimeout}
          enterTimeout={props.enterTimeoout}
          exitTimeout={props.exitTimeout}
          onEnter={context.onEnter}
          onExited={context.onExited}
        >
          {(fadeContext) => (
            <div
              ref={fadeContext.ref}
              class={fadeContext.class}
              style={fadeContext.style}
              data-mui-test="FakeBackdrop"
              onClick={context.onBackdropClick}
              role="presentation"
            >
              <Paper
                class={_paperClass()}
                style={_paperStyle()}
                elevation={props.elevation}
                role="dialog"
                square={props.square}
              >
                {props.children}
              </Paper>
            </div>
          )}
        </Fade>
      )}
    </Modal>
  );
}
