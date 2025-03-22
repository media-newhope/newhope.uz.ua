type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: TitleElement;
}

export function Title({ children, as = 'h2', className = '', ...props }: TitleProps) {
  const Component = as;
  const baseStyles = "mb-4";
  const sizeStyles = as === 'h2' ? 'text-3xl' : 'text-2xl';
  const combinedClassName = `${baseStyles} ${sizeStyles} ${className}`.trim();

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}
