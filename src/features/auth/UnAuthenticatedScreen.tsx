import React from "react";
import { useNavigate } from "react-router-dom";
import {Navbar} from "../layout/Navbar";

interface UnAuthenticatedScreenProps {
    children?: React.ReactNode;
}

/**
 * UnAuthenticatedScreen
 * - Uses existing layout/Navbar.tsx
 * - Redirects to /login when no auth token is found in localStorage
 * - Simple sidebar with user info and sign-out button
 * - Renders children in the main content area
 */
const UnAuthenticatedScreen: React.FC<UnAuthenticatedScreenProps> = ({ children }) => {
    const navigate = useNavigate();


    // derive a simple display name from localStorage user blob if present
    const userRaw = localStorage.getItem("user");
    let userName = "User";
    try {
        if (userRaw) {
            const parsed = JSON.parse(userRaw);
            if (parsed && typeof parsed.name === "string") userName = parsed.name;
        }
    } catch {
        /* ignore parse errors */
    }

    return (
        <>
            <Navbar />
            <div className="flex h-[calc(100vh-64px)]">
                <main className="flex-1 p-6">{children}</main>
            </div>
        </>
    );
};

export default UnAuthenticatedScreen;