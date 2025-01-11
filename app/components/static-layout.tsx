import { LANGUAGE } from "@/app/locales/models";
import { Header } from "@/app/sections/header/Header";
import { Footer } from "@/app/sections/footer/Footer";

interface StaticLayoutProps {
  children: React.ReactNode;
  lang: LANGUAGE;
}

export function StaticLayout({ lang, children }: StaticLayoutProps) {
  return (
    <>
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
