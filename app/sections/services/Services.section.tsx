import { Section } from "@/app/components/section/Section";
import { ServicesCarousel } from "@/app/sections/services/ServicesCarousel";
import { PageSectionProps } from "@/app/sections/models";
import { getTranslation } from "@/app/lib/utils";

export function ServicesSection({ ...props }: PageSectionProps) {
  const t = getTranslation(props.lang);
  return (
    <Section {...props} theme="custom" className="bg-stone-100">
      <Section.Title subtitle={t("SERVICES.TITLE")}>
        {t("SERVICES.SUBTITLE")}
      </Section.Title>
      <ServicesCarousel lang={props.lang} />
    </Section>
  );
}
