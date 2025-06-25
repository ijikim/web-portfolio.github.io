import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button type="button" className={`bg-transparent border-none outline-none cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
};
