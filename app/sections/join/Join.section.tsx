import { Section } from "@/app/components/section/Section";
import { JoinItem } from "@/app/sections/join/JoinItem";
import { PiChurchLight, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import { PageSectionProps, SITE_LINKS } from "@/app/sections/models";
import Link from "next/link";
import { IconButton } from "@/app/components/button/IconButton";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

export function JoinSection(props: PageSectionProps) {
  const joinItems = [
    {
      icon: PiChurchLight,
      title: "Відвідайте нас вживу",
      link: SITE_LINKS.GOOGLE_MAPS,
      description: (
        <>
          <p>Завжди раді вас бачити на наших зібраннях.</p>
          <p>Щонеділі об 11:00. вул. Мирослава Скорика 18</p>
        </>
      ),
    },
    {
      icon: PiYoutubeLogo,
      title: "Пряма трансляція",
      link: SITE_LINKS.YOUTUBE,
      description: "Прийміть участь у недільному зібранні де б ви не були",
    },
    {
      icon: PiInstagramLogo,
      title: "соціальні мережі",
      description: (
        <>
          <p className="mb-4">
            Приєднуйтесь до нашої дружньої спільноти, де кожен знайде підтримку
            та прийняття
          </p>
          <div className="flex justify-center">
            <Link target="_blank" href={SITE_LINKS.INSTAGRAM}>
              <IconButton color="primary">
                <FaInstagram size={24} />
              </IconButton>
            </Link>
            <Link target="_blank" href={SITE_LINKS.FACEBOOK}>
              <IconButton color="primary">
                <FaFacebook size={24} />
              </IconButton>
            </Link>
            <Link target="_blank" href={SITE_LINKS.TELEGRAM}>
              <IconButton color="primary">
                <FaTelegram size={24} />
              </IconButton>
            </Link>
            <Link target="_blank" href={SITE_LINKS.YOUTUBE}>
              <IconButton color="primary">
                <FaYoutube size={24} />
              </IconButton>
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <Section theme="dark" className="p-3 md:px-16 md:pb-28" {...props}>
      <Section.Title subtitle="приєднуйся" className="mb-8 md:mb-24">
        Щонеділі надихаємося Божим словом, та прославляємо Бога разом
      </Section.Title>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {joinItems.map((item, index) => {
          return (
            <JoinItem
              asLink={!!item.link}
              href={item.link}
              target="_blank"
              key={index}
              icon={item.icon}
              title={item.title}
            >
              {item.description}
            </JoinItem>
          );
        })}
      </div>
    </Section>
  );
}
