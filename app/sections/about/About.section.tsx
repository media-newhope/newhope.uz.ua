import { Section } from "@/app/components/Section/Section";
import { Button } from "@/app/components/Button/Button";
import Image from "next/image";
import { Title } from "@/app/components/Title";

export function AboutSection() {
  return (
    <Section>
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
          <Image
            src="/images/about.jpg"
            alt="Church Community"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
