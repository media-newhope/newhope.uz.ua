import { Header } from "@/app/components/Header/Header";
import { HeroSection } from "@/app/sections/hero/Hero.section";
import { AboutSection } from "@/app/sections/about/About.section";
import { ServicesSection } from "@/app/sections/services/Services.section";
import { JoinSection } from "@/app/sections/join/Join.section";
import { GivingSection } from "@/app/sections/giving/Giving.section";
import { TeamSection } from "@/app/sections/team/Team.section";
import { BuildingSection } from "@/app/sections/building/Building.section";
import { GospelSection } from "@/app/sections/gospel/gospel.section";
import { FeedbackSection } from "@/app/sections/feedback/Feedback.section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection
        title="Приєднуйся до нашої спільноти"
        description="Приєднуйтеся до нашої недільного зібрання або налаштуйтеся на наші прямі трансляції на YouTube, щоб спілкуватися з нами звідусіль."
        address="м. Ужгород, вул. Мирослава Скорика 18"
        imageUrl="/hero-background.jpg"
      />
      <AboutSection />
      <ServicesSection />
      <JoinSection />
      <GivingSection />
      <BuildingSection />
      <TeamSection />
      <GospelSection />
      <FeedbackSection />
    </>
  );
}
