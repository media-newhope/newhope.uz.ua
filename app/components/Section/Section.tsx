import { text } from "node:stream/consumers";

interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl" {...props}>
      {children}
    </div>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <>
      <h3 className="text-md uppercase text-center mb-5">{subtitle}</h3>
      <h2 className="text-5xl font-bold uppercase tracking-wide mb-6 text-center leading-tight">
        {children}
      </h2>
    </>
  );
}

Section.Title = SectionTitle;
