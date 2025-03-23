import { Section } from "@/app/components/section/Section";
import { Title } from "@/app/components/Title";
import { PageSectionProps } from "@/app/sections/models";
import { getTranslation } from "@/app/lib/utils";
import Link from "next/link";
import { getPageUrl } from "@/app/utils";
import Button from "@/app/components/button/Button";

export function AboutSection(props: PageSectionProps) {
  const t = getTranslation(props.lang);
  return (
    <Section {...props}>
      <Section.Title subtitle={t("ABOUT.SUBTITLE")}>
        {t("ABOUT.MISSION_1")} <br />
        {t("ABOUT.MISSION_2")} <br />
        {t("ABOUT.MISSION_3")}
      </Section.Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <Title>{t("ABOUT.ABOUT_US")}</Title>
          <p className="text-lg text-gray-700 mb-8">{t("ABOUT.DESCRIPTION")}</p>

          <Link href={getPageUrl(props.lang, "about")}>
            <Button className="uppercase" size="large" color="primary">
              {t("ABOUT.LEARN_MORE")}
            </Button>
          </Link>
        </div>

        <div className="relative h-[200px] bg-center bg-cover md:h-[400px] w-full rounded-lg overflow-hidden">
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
