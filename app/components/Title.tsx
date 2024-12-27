interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Title({ children, ...props }: TitleProps) {
  return (
    <h2 className="text-3xl" {...props}>
      {children}
    </h2>
  );
}
