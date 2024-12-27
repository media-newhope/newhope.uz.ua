"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "transparent";
  variant?: "solid";
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className: string;
}

export const Button = ({
  color = "primary",
  size = "large",
  variant = "solid",
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-lg transition-colors font-size-16 text-white";
  const colorStyles = {
    primary: "bg-primary-500 hover:bg-primary-400",
    secondary: "bg-secondary-500 hover:bg-secondary-400",
    transparent: "bg-transparent hover:text-gray-300",
  };

  const sizeStyles = {
    small: "text-sm px-2 py-1 rounded-md",
    medium: "text-base px-6 py-3 rounded-lg",
    large: "text-lg px-8 py-4 rounded-xl",
  };

  const variantStyles = {
    solid: "",
  };

  return (
    <button
      className={`${baseStyles} ${colorStyles[color]} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
