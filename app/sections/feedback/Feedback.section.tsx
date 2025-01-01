import { Section } from "@/app/components/section/Section";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FeedbackForm } from "@/app/sections/feedback/FeedbackForm";
import { IconButton } from "@/app/components/button/IconButton";
import { PageSectionProps, SITE_LINKS } from "@/app/sections/models";
import { getTranslation } from "@/app/lib/utils";

export function FeedbackSection(props: PageSectionProps) {
  const t = getTranslation(props.lang);

  return (
    <Section theme="custom" className="bg-secondary-200" {...props}>
      <Section.Title subtitle={t("FEEDBACK.SUBTITLE")}>
        {t("FEEDBACK.TITLE")}
      </Section.Title>
      <div className="container md:flex gap-32">
        <div className="basis-1/2">
          <FeedbackForm lang={props.lang} />
          <div className="h-6 md:hidden"></div>
        </div>
        <div className="basis-1/2">
          <h5 className="text-gray-600">{t("FEEDBACK.KEY1")}</h5>
          <p className="uppercase text-xl font-bold mb-8">
            <Link href={SITE_LINKS.GOOGLE_MAPS} target="_blank">
              {t("FEEDBACK.VALUE1")}
            </Link>
          </p>
          <h5 className="text-gray-600">{t("FEEDBACK.KEY2")}</h5>
          <p className="uppercase text-xl font-bold mb-8">
            <Link href="mailto:info@newhope.uz.ua">info@newhope.uz.ua</Link>
          </p>
          <h5 className="text-gray-600 mb-2">{t("FEEDBACK.KEY3")}</h5>
          <div className="flex gap-2">
            <Link
              target="_blank"
              href="https://www.facebook.com/newhopeuzhgorod"
            >
              <IconButton>
                <FaFacebook size={28} />
              </IconButton>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/newhopeuzh">
              <IconButton>
                <FaInstagram size={28} />
              </IconButton>
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@NewHopeUzh">
              <IconButton>
                <FaYoutube size={28} />
              </IconButton>
            </Link>
            <Link target="_blank" href="https://t.me/NewHopeUzh">
              <IconButton>
                <FaTelegram size={28} />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
