// components/IconButton/IconButton.tsx
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost";
  size?: "sm" | "md" | "lg";
  label?: string;
  isRound?: boolean;
  isLoading?: boolean;
  color?: "black" | "secondary" | "gray";
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  variant = "ghost",
  size = "sm",
  isRound = false,
  isLoading = false,
  className = "",
  color = "black",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-200 focus:outline-none";

  const variantStyles = {
    ghost: "bg-transparent  active:bg-gray-200",
  };

  const sizeStyles = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  };

  const colorStyles = {
    gray: "text-gray-400 enabled:hover:text-primary-400",
    black: "text-black enabled:hover:text-primary-400",
    secondary: "text-secondary-500 enabled:hover:text-secondary-400",
  };

  const disabledStyles =
    disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  const roundedStyles = isRound ? "rounded-full" : "rounded-lg";

  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${roundedStyles}
    ${className}
    ${colorStyles[color]}
  `;

  return (
    <button
      className={buttonStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
    </button>
  );
};
