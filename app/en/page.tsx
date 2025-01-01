import { Header } from "@/app/sections/header/Header";
import { HeroSection } from "@/app/sections/hero/Hero.section";
import { AboutSection } from "@/app/sections/about/About.section";
import { ServicesSection } from "@/app/sections/services/Services.section";
import { JoinSection } from "@/app/sections/join/Join.section";
import { GivingSection } from "@/app/sections/giving/Giving.section";
import { TeamSection } from "@/app/sections/team/Team.section";
import { BuildingSection } from "@/app/sections/building/Building.section";
import { GospelSection } from "@/app/sections/gospel/gospel.section";
import { FeedbackSection } from "@/app/sections/feedback/Feedback.section";
import { Footer } from "@/app/sections/footer/Footer";
import { LANGUAGE } from "@/app/locales/models";

export default function Home() {
  return (
    <>
      <Header lang={LANGUAGE.EN} />
      <HeroSection lang={LANGUAGE.EN} />
      <AboutSection lang={LANGUAGE.EN} id="about" />
      <ServicesSection lang={LANGUAGE.EN} id="services" />
      <JoinSection lang={LANGUAGE.EN} id="join" />
      <GivingSection lang={LANGUAGE.EN} id="giving" />
      <BuildingSection lang={LANGUAGE.EN} id="building" />
      <TeamSection lang={LANGUAGE.EN} id="team" />
      <GospelSection lang={LANGUAGE.EN} id="gospel" />
      <FeedbackSection lang={LANGUAGE.EN} id="feedback" />
      <Footer />
    </>
  );
}
