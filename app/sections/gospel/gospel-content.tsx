import { GospelIcon } from "@/app/components/Icon";
import { LANGUAGE } from "@/app/locales/models";
import { getTranslation } from "@/app/lib/utils";

export function getGospelItems(lang: LANGUAGE) {
  const t = getTranslation(lang);

  return [
    {
      icon: "love" as GospelIcon,
      title: t("GOSPEL.LOW1.TITLE"),
      details: {
        title: t("GOSPEL.LOW1.TITLE"),
        desc: (
          <>
            <p className="mb-3">{t("GOSPEL.LOW1.DESC1")}</p>
            <p className="mb-3">{t("GOSPEL.LOW1.DESC2")}</p>
          </>
        ),
        refs: [t("GOSPEL.LOW1.REF1"), t("GOSPEL.LOW1.REF2")],
        icon: "love" as GospelIcon,
      },
    },
    {
      icon: "separation" as GospelIcon,
      title: t("GOSPEL.LOW2.TITLE"),
      details: {
        title: t("GOSPEL.LOW2.TITLE"),
        desc: <>{t("GOSPEL.LOW2.DESC")}</>,
        refs: [t("GOSPEL.LOW2.REF1"), t("GOSPEL.LOW2.REF2")],
        icon: "separation" as GospelIcon,
      },
    },
    {
      icon: "cross" as GospelIcon,
      title: t("GOSPEL.LOW3.TITLE"),
      details: {
        title: t("GOSPEL.LOW3.TITLE"),
        desc: <>{t("GOSPEL.LOW3.DESC")}</>,
        refs: [t("GOSPEL.LOW3.REF1"), t("GOSPEL.LOW3.REF2")],
        icon: "cross" as GospelIcon,
      },
    },
    {
      icon: "decision" as GospelIcon,
      title: t("GOSPEL.LOW4.TITLE"),
      details: {
        title: t("GOSPEL.LOW4.TITLE"),
        desc: <>{t("GOSPEL.LOW4.DESC")}</>,
        refs: [t("GOSPEL.LOW4.REF1"), t("GOSPEL.LOW4.REF2")],
        icon: "decision" as GospelIcon,
      },
    },
  ];
}
