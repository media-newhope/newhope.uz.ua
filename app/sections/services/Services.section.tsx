import { Section } from "@/app/components/section/Section";
import { HTMLAttributes } from "react";
import { ServicesCarousel } from "@/app/sections/services/ServicesCarousel";

type ServicesSectionProps = HTMLAttributes<HTMLElement>;

export function ServicesSection({ ...props }: ServicesSectionProps) {
  return (
    <Section {...props} className="bg-gray-100">
      <Section.Title subtitle="наші служіння">
        кожен знайде щось для себе
      </Section.Title>
      <ServicesCarousel />
    </Section>
  );
}
