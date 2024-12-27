import { Section } from "@/app/components/Section/Section";
import { Button } from "@/app/components/Button/Button";

export function GivingSection() {
  return (
    <Section>
      <Section.Title subtitle="Пожертви">Давайте з радістю</Section.Title>
      <p className="text-center max-w-3xl m-auto mb-8">
        Ваші пожертви дозволяють нам здійснювати життєво важливі ініціативи,
        такі як будівництво церкви, підтримка військових та забезпечення програм
        для дітей, підлітків і бездомних. Приєднуйтесь до нас, щоб вливати на
        життя оточуючих.
      </p>
      <div className="flex justify-center gap-3">
        <Button>ПОЖЕРТВУВАТИ</Button>
        <Button color="black">БУДІВНИЦТВО</Button>
      </div>
    </Section>
  );
}
