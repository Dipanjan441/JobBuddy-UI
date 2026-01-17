import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useAppSelector } from "../../store/hooks";
import { selectIsAuthLoggedIn } from "../auth/state/authSelector";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    // Connect to Redux to decide what the Navbar shows
    const isLoggedIn = useAppSelector(selectIsAuthLoggedIn);

    return (
        <div className="flex flex-col min-h-screen w-full relative">
            <Navbar isLoggedIn={isLoggedIn} />
            <main className="grow flex flex-col pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;