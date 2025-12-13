import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, AuthUser } from "../types";
import { authService } from "../authService";

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
}

export const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state: AuthState, action: PayloadAction<AuthUser>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            authService.setAuthUserToStorage(action.payload);
        },
        logout: (state: AuthState) => {
            state.isLoggedIn = false;
            state.user = null;
            authService.removeAuthUserFromStorage();
        }
    }
})

export default authSlicer.reducer;

export const { loginSuccess, logout } = authSlicer.actions;