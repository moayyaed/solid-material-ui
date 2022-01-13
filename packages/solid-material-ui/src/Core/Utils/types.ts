import { JSX, ComponentProps, Component } from "solid-js";

export type Optional<T> = {
    [P in keyof T]: T[P] | undefined;
};

export type OmitProps<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ElementType = keyof JSX.IntrinsicElements | Component<any>;

export type ReplaceProps<Inner extends ElementType, P> = OmitProps<ComponentProps<Inner>, P> & P;

export type WithContextChildren<P = {}, C = any> = {
    children: ((context: C) => JSX.Element) | JSX.Element;
} & P;

export type WithChildren<P = {}> = {
    children: JSX.Element;
} & P;

export type WithoutChildren<P = {}> = P;

export interface IComponentBaseProps {
    /**
    * @deprecated use class over className. it is here for solid-styled-components
    */
    className: string;
    selector: string;
    extendor: string;
    ref: ((ref: HTMLElement | undefined) => void);
    disabled: boolean;
    class: string;
    style: JSX.CSSProperties;
    component: Component<any> | string | keyof JSX.IntrinsicElements;
}