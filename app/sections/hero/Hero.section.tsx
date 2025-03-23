import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { PageSectionProps, SITE_LINKS } from "@/app/sections/models";
import { getTranslation } from "@/app/lib/utils";

export function HeroSection({ lang }: PageSectionProps) {
  const t = getTranslation(lang);

  return (
    <div className="relative z-10 h-screen w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/images/intro-bg.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center pb-10">
          <div className="flex-1 flex items-center">
            <div className="max-w-[800px]">
              <h1 className="text-4xl md:text-8xl text-white mb-6 uppercase" style={{ lineHeight: "1.1" }}>
                {t("HERO.JOIN")}
              </h1>
              <p className="text-xl text-white/90">{t("HERO.SUBTITLE")}</p>
            </div>
          </div>

          <div className="text-white mb-4 text-xl text-right flex items-center justify-end gap-2">
            <Link
              className="flex items-center gap-2"
              href={SITE_LINKS.GOOGLE_MAPS}
              target="_blank"
            >
              <FaLocationDot size={40} />
              {t("HERO.ADDRESS")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
