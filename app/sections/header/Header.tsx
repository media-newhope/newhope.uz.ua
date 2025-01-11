"use client";
import { Button } from "../../components/button/Button";
import { LanguageSwitch } from "@/app/components/languageSwitch/LanguageSwitch";
import { Container } from "@/app/components/Container";
import { Burger } from "../../components/burger/Burger";
import { MobileNav } from "@/app/components/mobileNav/MobileNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LANG_URL_MAP,
  PageSectionProps,
  SITE_LINKS,
} from "@/app/sections/models";
import { getTranslation } from "@/app/lib/utils";
import { getPageUrl } from "@/app/utils";

export const Header = ({ lang }: PageSectionProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = getTranslation(lang);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: t("NAV.ABOUT"), link: getPageUrl(lang, SITE_LINKS.ABOUT) },
    { name: t("NAV.SERVICE"), link: getPageUrl(lang, SITE_LINKS.SERVICES) },
    { name: t("NAV.BUILDING"), link: getPageUrl(lang, SITE_LINKS.BUILDING) },
    { name: t("NAV.GIVING"), link: getPageUrl(lang, SITE_LINKS.GIVING) },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`py-3  [&_a]:text-white [&_a:hover]:text-gray-300 z-20 left-0 right-0 fixed transition-colors duration-500 ${
        isScrolled ? "bg-black/60 backdrop-blur-sm" : "bg-black"
      }`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center text-white">
          <Link
            href={LANG_URL_MAP[lang]}
            className="text-2xl flex items-center gap-4"
          >
            <img width="43px" src="/logo.png" alt="" />
            <span className="hidden md:inline-block">{t("LOGO.TEXT")}</span>
          </Link>
          <Burger
            onToggle={toggleMenu}
            isOpen={isMenuOpen}
            className="lg:hidden ml-3.5"
          />
        </div>

        <nav className="hidden lg:flex items-center text-base space-x-6 uppercase">
          {menuItems.map((item) => (
            <Link key={item.link} href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitch currentLanguage={lang} />
          <Button color="secondary" size="large">
            {t("NAV.JOIN_US")}
          </Button>
        </div>
      </Container>
      <MobileNav
        isOpen={isMenuOpen}
        menuItems={menuItems}
        className="lg:hidden"
      />
    </header>
  );
};
