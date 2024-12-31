import { Section } from "@/app/components/section/Section";
import { Title } from "@/app/components/Title";
import { PageSectionProps } from "@/app/sections/models";
import { Button } from "@/app/components/button/Button";

export function AboutSection(props: PageSectionProps) {
  return (
    <Section {...props}>
      <Section.Title subtitle="Наша місія">
        Вірити <br />
        любити <br />
        служити
      </Section.Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <Title>Про Нас</Title>
          <p className="text-lg text-gray-700">
            Ми віримо в силу віри, яка об&apos;єднує людей та надихає на добрі
            справи. Наша церква - це місце, де кожен може знайти духовну
            підтримку, зростати у вірі та служити ближньому.
          </p>

          <Button className="uppercase" size="large" color="primary">
            Дізнатися більше
          </Button>
        </div>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <img
            src="/images/about.jpg"
            alt="Church Community"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
