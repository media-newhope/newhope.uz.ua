import { Section } from "@/app/components/section/Section";
import { GospelWidget } from "@/app/sections/gospel/GospelWidget";
import { PageSectionProps } from "@/app/sections/models";

export function GospelSection(props: PageSectionProps) {
  return (
    <Section className="relative" {...props}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/gospel.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-10 w-full">
        <Section.Title subtitle="віра"></Section.Title>

        <div className="container mx-auto px-4">
          <GospelWidget />
        </div>
      </div>
    </Section>
  );
}
