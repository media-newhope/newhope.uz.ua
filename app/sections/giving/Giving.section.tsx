import { Section } from "@/app/components/section/Section";
import { PageSectionProps, SITE_LINKS } from "@/app/sections/models";
import { Button } from "@/app/components/button/Button";
import Link from "next/link";
import { getTranslation } from "@/app/lib/utils";

export function GivingSection(props: PageSectionProps) {
  const t = getTranslation(props.lang);

  return (
    <Section {...props}>
      <Section.Title subtitle={t("GIVING.SUBTITLE")}>
        {t("GIVING.TITLE")}
      </Section.Title>
      <p className="text-center max-w-3xl m-auto mb-8">{t("GIVING.DESC")}</p>
      <div className="mb-16 max-w-md m-auto">
        <h3 className="font-semibold text-gray-900 mb-2">{t("GIVING.KEY1")}</h3>
        <p className="text-gray-600 mb-2">
          IBAN: UA343 0529 9000 0026 0090 2360 2393
        </p>
        <h3 className="font-semibold text-gray-900 mb-2">{t("GIVING.KEY2")}</h3>
        <p className="text-gray-600 mb-2">{t("GIVING.VALUE2")}</p>
        <h3 className="font-semibold text-gray-900 mb-2">{t("GIVING.KEY3")}</h3>
        <p className="text-gray-600 mb-2">{t("GIVING.VALUE3")}</p>
      </div>
      <div className="flex justify-center gap-3">
        <Link href={SITE_LINKS.GIVING}>
          <Button>{t("GIVING.DONATE")}</Button>
        </Link>
        <Link href={SITE_LINKS.BUILDING}>
          <Button color="black">{t("GIVING.BUILDING")}</Button>
        </Link>
      </div>
    </Section>
  );
}
