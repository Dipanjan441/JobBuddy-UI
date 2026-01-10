import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg text-white transition-all duration-300 ${className}`}
      style={{
        backgroundColor: "var(--color-brand-blue)",
        color: "var(--color-background)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = "var(--color-brand-accent)";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = "var(--color-brand-blue)";
      }}
    >
      {children}
    </button>
  );
};

export default Button;