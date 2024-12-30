interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">
      {children}
    </h2>
  );
};