import type { ComponentType, FC, LazyExoticComponent } from "react";

export enum AUTHENTICATION_TYPE {
    AUTHENTICATE = 'AUTHENTICATE',
    UNAUTHENTICATE = 'UNAUTHENTICATE',
    GENERAL = 'GENERAL',
}

export interface AppRoute {
    name: string;
    path: string;
    component: LazyExoticComponent<FC> | ComponentType;
    guard: AUTHENTICATION_TYPE;
    children?: AppRoute[];
    layout?: LayoutType;
}

export enum LayoutType {
    BLANK = 'BLANK',
    MAIN = 'MAIN',
}