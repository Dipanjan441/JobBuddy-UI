import type { RootState } from "../../../store/store";

export const selectIsAuthLoggedIn = ((state:RootState) => state.auth.isLoggedIn);

export const selectAuthUser = ((state:RootState) => state.auth.user)