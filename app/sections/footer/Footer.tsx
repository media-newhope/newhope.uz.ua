import Link from "next/link";
import { IconButton } from "@/app/components/button/IconButton";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { PageSectionProps, SITE_LINKS } from "@/app/sections/models";
import { getTranslation } from "@/app/lib/utils";

export const Footer = ({ lang }: PageSectionProps) => {
  const t = getTranslation(lang);

  const menuItems = [
    { name: t("FOOTER.MENU.ABOUT"), link: SITE_LINKS.ABOUT },
    { name: t("FOOTER.MENU.SERVICES"), link: SITE_LINKS.SERVICES },
    { name: t("FOOTER.MENU.GIVING"), link: SITE_LINKS.GIVING },
    { name: t("FOOTER.MENU.BUILDING"), link: SITE_LINKS.BUILDING },
    { name: t("FOOTER.MENU.JOIN"), link: SITE_LINKS.JOIN },
  ];

  return (
    <footer className="bg-black text-white py-12 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl flex items-center gap-4 mb-5 md:mb-16"
            >
              <img width="43px" src="/logo.png" alt="" />
              <span>{t("LOGO.TEXT")}</span>
            </Link>
            <div className="uppercase">
              <p className="mb-2">info@newhope.uz.ua</p>
              <p>
                <Link
                  className="flex items-center gap-2"
                  href={SITE_LINKS.GOOGLE_MAPS}
                  target="_blank"
                >
                  {t("FOOTER.CONTACT.ADDRESS")}
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg">{t("FOOTER.LINKS")}</h3>
            <ul className="space-y-2 uppercase">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg">{t("FOOTER.FIND_US")}</h3>
            <div className="flex space-x-4">
              <Link target="_blank" href={SITE_LINKS.FACEBOOK}>
                <IconButton color="secondary">
                  <FaFacebook size={28} />
                </IconButton>
              </Link>
              <Link target="_blank" href={SITE_LINKS.INSTAGRAM}>
                <IconButton color="secondary">
                  <FaInstagram size={28} />
                </IconButton>
              </Link>
              <Link target="_blank" href={SITE_LINKS.YOUTUBE}>
                <IconButton color="secondary">
                  <FaYoutube size={28} />
                </IconButton>
              </Link>
              <Link target="_blank" href={SITE_LINKS.TELEGRAM}>
                <IconButton color="secondary">
                  <FaTelegram size={28} />
                </IconButton>
              </Link>
            </div>
          </div>

          <div className="min-w-[300px]">
            <h3 className="mb-4 text-lg">{t("FOOTER.OUR_PARTNERS")}</h3>
            <div className="space-y-4"></div>
            <ul>
              <li className="flex gap-3 mb-2 align-middle">
                <div className="w-[80px] text-center justify-center flex">
                  <Link href="https://www.baptyst.com" target="_blank">
                    <img
                      width="80px"
                      src="/images/ehb.png"
                      alt="Всеукраїнський Союз Церков Євангельських Християн-баптистів"
                    />
                  </Link>
                </div>

                <div className="flex-1">
                  <h4 className="uppercase text-lg mb-1">
                    {t("FOOTER.PARTNERS_LIST.ECB.TITLE")}
                  </h4>
                  {t("FOOTER.PARTNERS_LIST.ECB.FULL_NAME")}
                </div>
              </li>
              <li className="flex mb-2 gap-3 align-middle">
                <div className="w-[80px] justify-center flex">
                  <Link
                    className="text-center"
                    href="https://ubts.org.ua/"
                    target="_blank"
                  >
                    <img
                      width="40px"
                      src="/images/ubts.png"
                      alt="Українська Баптистська Теологічна Семінарія"
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <h4 className="uppercase text-lg mb-1">
                    {t("FOOTER.PARTNERS_LIST.UBTS.TITLE")}
                  </h4>
                  {t("FOOTER.PARTNERS_LIST.UBTS.FULL_NAME")}
                </div>
              </li>
              <li className="flex gap-3 align-middle">
                <div className="w-[80px] text-center justify-center flex">
                  <Link href="https://ktsonline.org" target="_blank">
                    <img
                      width="80px"
                      src="/images/kbs.png"
                      alt="Київська Богословська Семінарія"
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <h4 className="uppercase text-lg mb-1">
                    {t("FOOTER.PARTNERS_LIST.KTS.TITLE")}
                  </h4>
                  {t("FOOTER.PARTNERS_LIST.KTS.FULL_NAME")}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
