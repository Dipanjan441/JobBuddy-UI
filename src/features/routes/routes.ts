import NotFoundPage from "../app/NotFoundPage";
import Home from "../home/Home";
import Login from "../login/Login";
import { AUTHENTICATION_TYPE, type AppRoute } from "./types";

export const LOGIN_ROUTE: AppRoute = {
    name: 'Login',
    path: '/login',
    component: Login,
    guard: AUTHENTICATION_TYPE.UNAUTHENTICATE
}

export const HOME_ROUTE: AppRoute = {
    name: 'Home',
    path: '/',
    component: Home,
    guard: AUTHENTICATION_TYPE.GENERAL
}

export const NOT_FOUND_ROUTE: AppRoute = {
  name: 'Page not found',
  path: '*',
  component: NotFoundPage,
  guard: AUTHENTICATION_TYPE.GENERAL
}

export const ROUTES = [
    LOGIN_ROUTE,
    HOME_ROUTE,
    NOT_FOUND_ROUTE,
]