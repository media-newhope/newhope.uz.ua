import {Header} from "@/app/components/Header/Header";
import {Hero} from "@/app/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Приєднуйся до нашої спільноти"
        description="Приєднуйтеся до нашої недільного зібрання або налаштуйтеся на наші прямі трансляції на YouTube, щоб спілкуватися з нами звідусіль."
        address="м. Ужгород, вул. мирослава Скорика 18"
        imageUrl="/hero-background.jpg"
      />
    </>
  );
}
