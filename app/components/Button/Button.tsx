interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  variant?: 'solid' | 'nav'
  children: React.ReactNode;
}

export const Button = ({ color = 'primary', variant = 'solid', children, ...props }: ButtonProps) => {
  const baseStyles = 'px-8 py-4 rounded-lg transition-colors font-size-16 text-white';
  const colorStyles = {
    primary: 'bg-primary-500 hover:bg-primary-400',
    secondary: 'bg-secondary-500 hover:bg-secondary-400'
  };

  const variantStyles = {
    solid: '',
    nav: 'rounded-xl'
  };

  return (
    <button
      className={`${baseStyles} ${colorStyles[color]} ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
