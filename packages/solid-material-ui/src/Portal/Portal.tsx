import { JSX, Show } from "solid-js";

import { Portal as PortalCore } from "solid-js/web";

import type { Optional } from "../Core";

import { ownerDocument } from "../Script/helpers";

interface IPortalOptional {
  disabled: boolean;
  target: HTMLElement;
  targetBody: HTMLElement;
  targetHead: HTMLElement;
}

interface IPortalRequired {
  children: JSX.Element;
}

type IPortalAttributes = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children">;

export type IPortalProps = Partial<Optional<IPortalOptional>> &
  IPortalRequired &
  IPortalAttributes;

export function Portal(props: IPortalProps): JSX.Element {
  const _mount = () =>
    props.target ??
    (props.targetHead ? ownerDocument(props.targetHead).head : undefined) ??
    (props.targetBody ? ownerDocument(props.targetBody).body : undefined) ??
    document.body;
  return (
    <Show when={!props.disabled} fallback={props.children}>
      <PortalCore mount={_mount()}>{props.children}</PortalCore>
    </Show>
  );
}
