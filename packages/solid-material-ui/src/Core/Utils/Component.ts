import { JSX, ComponentProps, Component } from "solid-js";

export type Optional<T> = {
    [P in keyof T]: T[P] | undefined;
};

export type OmitProps<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ElementType = keyof JSX.IntrinsicElements | Component<any>;

export type ReplaceProps<Inner extends ElementType, P> = OmitProps<ComponentProps<Inner>, P> & P;

export type PropsWithContextChildren<P = {}, C = any> = {
    children: ((context: C) => JSX.Element) | JSX.Element;
} & P;

export type PropsWithChildren<P = {}> = {
    children: JSX.Element;
} & P;

export type PropsWithoutChildren<P = {}> = P;