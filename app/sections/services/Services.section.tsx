import { Section } from "@/app/components/section/Section";
import { ServicesCarousel } from "@/app/sections/services/ServicesCarousel";
import { PageSectionProps } from "@/app/sections/models";

export function ServicesSection({ ...props }: PageSectionProps) {
  return (
    <Section {...props} className="bg-gray-100">
      <Section.Title subtitle="наші служіння">
        кожен знайде щось для себе
      </Section.Title>
      <ServicesCarousel />
    </Section>
  );
}
