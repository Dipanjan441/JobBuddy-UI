export interface AuthUser {
    id: string;
    name: string;
    email: string;
    token: Token;
}

export interface AuthState {
    user: Nullable<AuthUser>;
    isLoggedIn: boolean;
}

interface Token {
    accessToken: string;
    refreshToken: string;
    validTo?: string;
}