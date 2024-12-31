import { Section } from "@/app/components/section/Section";
import { JoinItem } from "@/app/sections/join/JoinItem";
import { PiChurchLight, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import { PageSectionProps } from "@/app/sections/models";

export function JoinSection(props: PageSectionProps) {
  const joinItems = [
    {
      icon: PiChurchLight,
      title: "Відвідайте нас вживу",
      description:
        "Щонеділі о 10:00 ми збираємося разом для прославлення та вивчення Божого слова",
    },
    {
      icon: PiYoutubeLogo,
      title: "Місце зустрічі",
      description:
        "Ми знаходимося за адресою вул. Примірна 123, легко дістатися громадським транспортом",
    },
    {
      icon: PiInstagramLogo,
      title: "Спільнота",
      description:
        "Приєднуйтесь до нашої дружньої спільноти, де кожен знайде підтримку та прийняття",
    },
  ];

  return (
    <Section theme="dark" className="p-3 md:px-16 md:pb-28" {...props}>
      <Section.Title subtitle="приєднуйся" className="mb-8 md:mb-24">
        Щонеділі надихаємося Божим словом, та прославляємо Бога разом
      </Section.Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {joinItems.map((item, index) => (
          <JoinItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}
