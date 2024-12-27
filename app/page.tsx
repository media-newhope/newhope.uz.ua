import { Header } from "@/app/components/Header/Header";
import { HeroSection } from "@/app/Sections/Hero/Hero.section";
import { AboutSection } from "@/app/Sections/About/About.section";

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
      <AboutSection></AboutSection>
    </>
  );
}
