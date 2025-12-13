import { AUTH_USER_STORAGE_KEY } from "./constnts";
import type { AuthUser } from "./types";

const setAuthUserToStorage = (user: AuthUser) => {
    localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user));
}

const getAuthUserFromStorage = (): AuthUser | null => {
    const userData = localStorage.getItem(AUTH_USER_STORAGE_KEY);
    if(userData) {
        return JSON.parse(userData) as AuthUser;;
    }
    return null;
}

const removeAuthUserFromStorage = () => {
    localStorage.removeItem(AUTH_USER_STORAGE_KEY);
}

export const authService = {
    setAuthUserToStorage,
    getAuthUserFromStorage,
    removeAuthUserFromStorage
}