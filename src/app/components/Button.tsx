import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const Button = ({ className = "", children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`rounded-md bg-primary-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
