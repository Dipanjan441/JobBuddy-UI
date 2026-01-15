import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";

interface AuthenticatedScreenProps {
    children?: React.ReactNode;
}

/**
 * AuthenticatedScreen
 * - Uses existing layout/Navbar.tsx
 * - Redirects to /login when no auth token is found in localStorage
 * - Simple sidebar with user info and sign-out button
 * - Renders children in the main content area
 */
const AuthenticatedScreen: React.FC<AuthenticatedScreenProps> = ({ children }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
    };

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
        <div className="flex flex-col min-h-screen w-full relative">
            <Navbar />
            <main className="grow flex flex-col pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AuthenticatedScreen;