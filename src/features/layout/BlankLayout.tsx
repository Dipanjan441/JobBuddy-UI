import React from "react";

const BlankLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen w-full bg-white">
            {children}
        </main>
    );
};

export default BlankLayout;