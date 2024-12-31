import { Section } from "@/app/components/section/Section";
import { PageSectionProps, SITE_LINKS } from "@/app/sections/models";
import { Button } from "@/app/components/button/Button";
import Link from "next/link";

export function GivingSection(props: PageSectionProps) {
  return (
    <Section {...props}>
      <Section.Title subtitle="Пожертви">Давайте з радістю</Section.Title>
      <p className="text-center max-w-3xl m-auto mb-8">
        Ваші пожертви дозволяють нам здійснювати життєво важливі ініціативи,
        такі як будівництво церкви, підтримка військових та забезпечення програм
        для дітей, підлітків і бездомних. Приєднуйтесь до нас, щоб вливати на
        життя оточуючих.
      </p>
      <div className="mb-16 max-w-md m-auto">
        <h3 className="font-semibold text-gray-900 mb-2">
          Банківський переказ
        </h3>
        <p className="text-gray-600 mb-2">
          IBAN: UA343 0529 9000 0026 0090 2360 2393
        </p>
        <h3 className="font-semibold text-gray-900 mb-2">Призначення</h3>
        <p className="text-gray-600 mb-2">Благодійні пожертви</p>
        <h3 className="font-semibold text-gray-900 mb-2">Отримувач</h3>
        <p className="text-gray-600 mb-2">
          РО РГ Церкви Євангельскиз Християн-баптистів &quot;Нова Надія&quot;
        </p>
      </div>
      <div className="flex justify-center gap-3">
        <Link href={SITE_LINKS.GIVING}>
          <Button>ПОЖЕРТВУВАТИ</Button>
        </Link>
        <Link href={SITE_LINKS.BUILDING}>
          <Button color="black">БУДІВНИЦТВО</Button>
        </Link>
      </div>
    </Section>
  );
}
