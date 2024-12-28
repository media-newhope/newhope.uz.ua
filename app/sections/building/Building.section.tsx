import { Section } from "@/app/components/Section/Section";
import { Button } from "@/app/components/Button/Button";

export function BuildingSection() {
  return (
    <Section className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/constraint.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="bg-white p-8 md:p-14 shadow-xl border-b-[16px] border-secondary-500">
          {/* Title */}
          <h2 className="text-2xl uppercase md:text-5xl font-bold text-center text-gray-900 mb-4">
            Будівництво церковного приміщення
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-center mb-8 text-md leading-relaxed max-w-sm m-auto">
            Наша ціль - побудувати приміщення для кращого служіння нашому місту
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button>Дізнатись більше</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
