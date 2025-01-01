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
  console.log(LANGUAGE.UK, "LANGUAGE.UK");
  return (
    <>
      <Header lang={LANGUAGE.UK} />
      <HeroSection lang={LANGUAGE.UK} />
      <AboutSection lang={LANGUAGE.UK} id="about" />
      <ServicesSection lang={LANGUAGE.UK} id="services" />
      <JoinSection lang={LANGUAGE.UK} id="join" />
      <GivingSection lang={LANGUAGE.UK} id="giving" />
      <BuildingSection lang={LANGUAGE.UK} id="building" />
      <TeamSection lang={LANGUAGE.UK} id="team" />
      <GospelSection lang={LANGUAGE.UK} id="gospel" />
      <FeedbackSection lang={LANGUAGE.UK} id="feedback" />
      <Footer lang={LANGUAGE.UK} />
    </>
  );
}
