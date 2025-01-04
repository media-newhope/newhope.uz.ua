import { Section } from "@/app/components/section/Section";
import { JoinItem } from "@/app/sections/join/JoinItem";
import { PiChurchLight, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import { PageSectionProps, SITE_LINKS } from "@/app/sections/models";
import Link from "next/link";
import { IconButton } from "@/app/components/button/IconButton";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { getTranslation } from "@/app/lib/utils";

export function JoinSection(props: PageSectionProps) {
  const t = getTranslation(props.lang);

  const joinItems = [
    {
      icon: PiChurchLight,
      title: t("JOIN.VISIT.TITLE"),
      link: SITE_LINKS.GOOGLE_MAPS,
      description: (
        <>
          <p>{t("JOIN.VISIT.DESCRIPTION1")}</p>
          <p>{t("JOIN.VISIT.DESCRIPTION2")}</p>
        </>
      ),
    },
    {
      icon: PiYoutubeLogo,
      title: t("JOIN.LIVESTREAM.TITLE"),
      link: SITE_LINKS.YOUTUBE,
      description: t("JOIN.LIVESTREAM.DESCRIPTION"),
    },
    {
      icon: PiInstagramLogo,
      title: t("JOIN.SOCIAL.TITLE"),
      description: (
        <>
          <p className="mb-4">{t("JOIN.SOCIAL.DESCRIPTION")}</p>
          <div className="flex justify-center">
            <Link target="_blank" href={SITE_LINKS.INSTAGRAM}>
              <IconButton color="primary">
                <FaInstagram size={24} />
              </IconButton>
            </Link>
            <Link target="_blank" href={SITE_LINKS.FACEBOOK}>
              <IconButton color="primary">
                <FaFacebook size={24} />
              </IconButton>
            </Link>
            <Link target="_blank" href={SITE_LINKS.TELEGRAM}>
              <IconButton color="primary">
                <FaTelegram size={24} />
              </IconButton>
            </Link>
            <Link target="_blank" href={SITE_LINKS.YOUTUBE}>
              <IconButton color="primary">
                <FaYoutube size={24} />
              </IconButton>
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <Section
      theme="dark"
      className="p-3 md:px-16 md:pb-28 bg-[url('/images/join-bg.jpg')] bg-cover bg-center"
      {...props}
    >
      <Section.Title subtitle={t("JOIN.TITLE")} className="mb-8 md:mb-24">
        {t("JOIN.SUBTITLE")}
      </Section.Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {joinItems.map((item, index) => {
          return (
            <JoinItem
              asLink={!!item.link}
              href={item.link}
              target="_blank"
              key={index}
              icon={item.icon}
              title={item.title}
            >
              {item.description}
            </JoinItem>
          );
        })}
      </div>
    </Section>
  );
}
