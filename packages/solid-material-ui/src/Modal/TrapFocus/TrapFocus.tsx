import { createEffect, JSX, onCleanup } from "solid-js";

import type { Optional } from "../../Core";

import { TrapFocusHelper } from "./TrapFocusHelper";

interface ITrapFocusOptional {
  open: boolean | undefined;
  isEnabled: boolean | undefined;
  disableAutoFocus: boolean | undefined;
  disableEnforceFocus: boolean | undefined;
  disableRestoreFocus: boolean | undefined;
}

interface ITrapFocusRequired {
  children: (ref: (arg: HTMLElement | undefined) => void) => JSX.Element;
}

type ITrapFocusAttributes = Omit<
  JSX.HTMLAttributes<HTMLDivElement>,
  "children"
>;

export type ITrapFocusProps = Partial<Optional<ITrapFocusOptional>> &
  ITrapFocusRequired &
  ITrapFocusAttributes;

export function TrapFocus(props: ITrapFocusProps): JSX.Element {
  let sentinelStartRef: HTMLDivElement | undefined;
  let sentinelEndRef: HTMLDivElement | undefined;
  let nodeRef: HTMLElement | undefined;

  const _handleRef = (ref: HTMLElement | undefined) => {
    nodeRef = ref;
  };

  let id: string | undefined;

  createEffect(() => {
    if (id) {
      TrapFocusHelper.dispose(id);
    }
    if (props.open) {
      id = TrapFocusHelper.construct(
        sentinelStartRef,
        sentinelEndRef,
        nodeRef,
        props.disableAutoFocus,
        props.disableRestoreFocus,
        props.disableEnforceFocus,
        props.isEnabled
      );
    }
  });

  onCleanup(() => {
    if (id) {
      TrapFocusHelper.dispose(id);
    }
  });

  return (
    <>
      <div
        ref={(r) => (sentinelStartRef = r)}
        tabIndex="0"
        data-test="sentinelStart"
      />
      {props.children?.(_handleRef)}
      <div
        ref={(r) => (sentinelEndRef = r)}
        tabIndex="0"
        data-test="sentinelEnd"
      />
    </>
  );
}
