import { JSX, Match, Show, Switch } from "solid-js";

import type { IComponentBaseProps, Optional } from "../../Core";

import { useComponentContext, useCSS, useProps } from "../../Core";

import { Severity, Color, FontSize } from "../../Core";
import { Paper } from "../../Paper";

import { SuccessOutlinedIcon } from "../Icon/SuccessOutlinedIcon";
import { ErrorOutlinedIcon } from "../Icon/ErrorOutlinedIcon";
import { InfoOutlinedIcon } from "../Icon/InfoOutlinedIcon";
import { ReportProblemOutlinedIcon } from "../Icon/ReportProblemOutlinedIcon";
import { CloseIcon } from "../../Icons";
import { IconButton, IconButtonSize } from "../../Button";

import { AlertVariant } from "./AlertVariant";

import "./AlertStyle";

interface IAlertOptional extends IComponentBaseProps {
  action: JSX.Element;
  closeText: string;
  icon: JSX.Element;
  noIcon: boolean;
  onClose: (() => void);
  severity: Severity;
  color: Color;
  variant: AlertVariant;
  iconClass: string;
  iconStyle: JSX.CSSProperties;
  messageClass: string;
  messageStyle: JSX.CSSProperties;
  actionClass: string;
  actionStyle: JSX.CSSProperties;
  role: string;
}

interface IAlertRequired {
  children: JSX.Element;
}

type IAlertAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

type IAlertArguments = Optional<IAlertOptional> & Optional<IAlertRequired>;

export type IAlertProps = Partial<Optional<IAlertOptional>> &
  IAlertRequired &
  IAlertAttributes;

const defaults: IAlertArguments = {
  selector: "Alert",
  extendor: undefined,
  ref: undefined,
  className: undefined,
  disabled: undefined,
  class: undefined,
  style: undefined,
  component: "div",
  action: undefined,
  closeText: "Close",
  icon: undefined,
  noIcon: undefined,
  onClose: undefined,
  severity: Severity.Success,
  color: Color.Default,
  variant: AlertVariant.Standard,
  iconClass: undefined,
  iconStyle: undefined,
  messageClass: undefined,
  messageStyle: undefined,
  actionClass: undefined,
  actionStyle: undefined,
  role: "alert",
  children: undefined,
};

export function Alert(args: IAlertProps): JSX.Element {
  const componentContext = useComponentContext();
  const [props, others] = useProps(args, defaults);
  const { toClass, toStyle } = useCSS(props);

  const _disabled = () => props.disabled ?? componentContext?.disabled;

  const _component = () => props.component;
  
  const _hasAction = () => !!props.action;

  const _hasClose = () => !_hasAction() && !!props.onClose;

  const _showIcon = () => !props.noIcon;

  const _hasIcon = () => !!props.icon;

  const _class = toClass({
    *append() {
      yield "Root";
      if (_disabled()) yield "Disabled";
      yield `${props.variant}`;
      if (props.color !== Color.Default)
        yield `${props.variant}-${props.color}`;
      if (props.color === Color.Default)
        yield `${props.variant}-${props.severity}`;
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

  const _iconClass = toClass({
    section: "Icon",
    include: true,
    *class() {
      yield props.iconClass;
    },
  });

  const _iconStyle = toStyle({
    *style() {
      yield props.iconStyle;
    },
  });

  const _messageClass = toClass({
    section: "Message",
    include: true,
    *class() {
      yield props.messageClass;
    },
  });

  const _messageStyle = toStyle({
    *style() {
      yield props.messageStyle;
    },
  });

  const _actionClass = toClass({
    section: "Action",
    include: true,
    *class() {
      yield props.actionClass;
    },
  });

  const _actionStyle = toStyle({
    *style() {
      yield props.actionStyle;
    },
  });

  return (
    <Paper
      {...others}
      ref={props.ref}
      component={_component()}
      disabled={_disabled()}
      class={_class()}
      style={_style()}
      role={props.role}
      square
      elevation={0}
    >
      <Show when={_showIcon()}>
        <div class={_iconClass()} style={_iconStyle()}>
          <Show when={!_hasIcon()} fallback={props.icon}>
            <Switch>
              <Match when={props.severity === Severity.Success}>
                <SuccessOutlinedIcon fontSize={FontSize.Inherit} />
              </Match>
              <Match when={props.severity === Severity.Error}>
                <ErrorOutlinedIcon fontSize={FontSize.Inherit} />
              </Match>
              <Match when={props.severity === Severity.Info}>
                <InfoOutlinedIcon fontSize={FontSize.Inherit} />
              </Match>
              <Match when={props.severity === Severity.Warning}>
                <ReportProblemOutlinedIcon fontSize={FontSize.Inherit} />
              </Match>
            </Switch>
          </Show>
        </div>
      </Show>
      <div class={_messageClass()} style={_messageStyle()}>
        {props.children}
      </div>
      <Show when={_hasAction()}>
        <div class={_actionClass()} style={_actionStyle()}>
          {props.action}
        </div>
      </Show>
      <Show when={_hasClose()}>
        <div class={_actionClass()} style={_actionStyle()}>
          <IconButton
            size={IconButtonSize.Small}
            aria-label={props.closeText}
            title={props.closeText}
            color={Color.Inherit}
            onClick={props.onClose}
          >
            <CloseIcon fontSize={FontSize.Small} />
          </IconButton>
        </div>
      </Show>
    </Paper>
  );
}
