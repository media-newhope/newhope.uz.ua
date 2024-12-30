import { Section } from "@/app/components/section/Section";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TeamMember } from "@/app/sections/team/TeamMember";

export function TeamSection() {
  const teamMembers = [
    {
      image: "/images/sl.jpg",
      name: "Вячеслав Недзельський",
      title: "Пастор",
      socials: [
        { icon: FaFacebook, link: "https://www.facebook.com/nedzelskyi" },
        {
          icon: FaInstagram,
          link: "https://www.instagram.com/nedzik?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      ],
    },
    {
      image: "/images/se.jpg",
      name: "Сергій Луценко",
      title: "Диякон",
    },
    {
      image: "/images/se-g.jpg",
      name: "CЕргій гончаров",
      title: "Диякон",
    },
    {
      image: "/images/al.jpg",
      name: "Олександр булеца",
      title: "Диякон",
    },
  ];

  return (
    <Section>
      <Section.Title subtitle="команда">Команда служителів</Section.Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            socials={member.socials}
          />
        ))}
      </div>
    </Section>
  );
}
