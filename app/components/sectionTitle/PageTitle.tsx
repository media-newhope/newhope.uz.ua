interface SectionTitleProps {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-4xl font-bold uppercase tracking-wide text-center  py-10">
      {children}
    </h2>
  );
};
