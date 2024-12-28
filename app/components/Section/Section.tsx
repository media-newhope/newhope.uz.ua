import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  theme?: "light" | "dark";
}

export function Section({
  children,
  className,
  theme = "light",
  ...props
}: SectionProps) {
  const themeClass = theme === "light" ? "bg-white" : "bg-gray-900 text-white";

  return (
    <section {...props} className={`${className} ${themeClass}`}>
      <div className={`container mx-auto px-4 py-10 max-w-7xl `}>
        {children}
      </div>
    </section>
  );
}

interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  subtitle?: string;
}

function SectionTitle({ children, subtitle, ...props }: SectionTitleProps) {
  return (
    <div {...props}>
      <h3 className="text-md uppercase text-center mb-5">{subtitle}</h3>
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-8 text-center leading-tight">
        {children}
      </h2>
    </div>
  );
}

Section.Title = SectionTitle;
