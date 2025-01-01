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
        desc: (
          <>
            <p className="mb-3">{t("GOSPEL.LOW1.DESC1")}</p>
            <p className="mb-3">{t("GOSPEL.LOW1.DESC2")}</p>
            <p>{t("GOSPEL.LOW1.DESC3")}</p>
          </>
        ),
        refs: ["Івана 1:12", "Об’явлення 3:20"],
        icon: "love" as GospelIcon,
      },
    },
    {
      icon: "separation" as GospelIcon,
      title: t("GOSPEL.LOW2.TITLE"),
      details: {
        desc: <></>,
        refs: [""],
        icon: "separation" as GospelIcon,
      },
    },
    {
      icon: "cross" as GospelIcon,
      title: t("GOSPEL.LOW3.TITLE"),
      details: {
        desc: <></>,
        refs: [""],
        icon: "cross" as GospelIcon,
      },
    },
    {
      icon: "decision" as GospelIcon,
      title: t("GOSPEL.LOW4.TITLE"),
      details: {
        desc: <></>,
        refs: [""],
        icon: "decision" as GospelIcon,
      },
    },
  ];
}
