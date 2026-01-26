import About from "../about/About";
import Feature from "../app-feature/Feature";
import NotFoundPage from "../app/NotFoundPage";
import Home from "../home/Home";
import Pricing from "../pricing/Pricing";
import Templates from "../templates/Templates";
import { AUTHENTICATION_TYPE, LayoutType, type AppRoute } from "./types";
import { SignUp } from "../signIn/SignUp";
import { ForgotPassword } from "../signIn/ForgotPassword";
import { SignIn } from "../signIn/SignIn";

export const SIGNIN_ROUTE: AppRoute = {
    name: 'SignIn',
    path: '/signin',
    component: SignIn,
    guard: AUTHENTICATION_TYPE.UNAUTHENTICATE,
    layout: LayoutType.BLANK
}

export const SIGNUP_ROUTE: AppRoute = {
    name: 'Sign Up',
    path: '/signup',
    component: SignUp,
    guard: AUTHENTICATION_TYPE.UNAUTHENTICATE,
    layout: LayoutType.BLANK
}

export const FORGOT_PASSWORD_ROUTE: AppRoute = {
    name: 'Forgot Password',
    path: '/forgot-password',
    component: ForgotPassword,
    guard: AUTHENTICATION_TYPE.UNAUTHENTICATE,
    layout: LayoutType.BLANK
}

export const HOME_ROUTE: AppRoute = {
    name: 'Home',
    path: '/',
    component: Home,
    guard: AUTHENTICATION_TYPE.GENERAL,
    layout: LayoutType.MAIN
}

export const FEATURE_ROUTE: AppRoute = {
    name: 'Feature',
    path: '/feature',
    component: Feature,
    guard: AUTHENTICATION_TYPE.GENERAL,
    layout: LayoutType.MAIN
}

export const PRICING_ROUTE: AppRoute = {
    name: 'Pricing',
    path: '/pricing',
    component: Pricing,
    guard: AUTHENTICATION_TYPE.GENERAL,
    layout: LayoutType.MAIN
}

export const ABOUT_ROUTE: AppRoute = {
    name: 'About',
    path: '/about',
    component: About,
    guard: AUTHENTICATION_TYPE.GENERAL,
    layout: LayoutType.MAIN
}

export const TEMPLATES_ROUTE: AppRoute = {
    name: 'Templates',
    path: '/templates',
    component: Templates,
    guard: AUTHENTICATION_TYPE.AUTHENTICATE,
    layout: LayoutType.MAIN
}

export const NOT_FOUND_ROUTE: AppRoute = {
    name: 'Page not found',
    path: '*',
    component: NotFoundPage,
    guard: AUTHENTICATION_TYPE.GENERAL,
    layout: LayoutType.BLANK
}

export const NAVIGATION_ROUTES = [
    FEATURE_ROUTE,
    PRICING_ROUTE,
    ABOUT_ROUTE,
    TEMPLATES_ROUTE,
]

export const ROUTES = [
    ...NAVIGATION_ROUTES,
    SIGNIN_ROUTE,
    SIGNUP_ROUTE,
    FORGOT_PASSWORD_ROUTE,
    HOME_ROUTE,
    NOT_FOUND_ROUTE,
]