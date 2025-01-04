import { Section } from "@/app/components/section/Section";
import { Title } from "@/app/components/Title";
import { PageSectionProps } from "@/app/sections/models";
import { Button } from "@/app/components/button/Button";
import { getTranslation } from "@/app/lib/utils";

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
        <div className="space-y-6 text-center md:text-left">
          <Title>{t("ABOUT.ABOUT_US")}</Title>
          <p className="text-lg text-gray-700">{t("ABOUT.DESCRIPTION")}</p>

          <Button className="uppercase" size="large" color="primary">
            {t("ABOUT.LEARN_MORE")}
          </Button>
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
