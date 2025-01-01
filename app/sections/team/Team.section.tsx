import { Section } from "@/app/components/section/Section";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TeamMember } from "@/app/sections/team/TeamMember";
import { PageSectionProps } from "@/app/sections/models";
import { getTranslation } from "@/app/lib/utils";

export function TeamSection(props: PageSectionProps) {
  const t = getTranslation(props.lang);

  const teamMembers = [
    {
      image: "/images/sl.jpg",
      name: t("TEAM.MEMBERS.MEMBER_1.NAME"),
      title: t("TEAM.MEMBERS.MEMBER_1.TITLE"),
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
      name: t("TEAM.MEMBERS.MEMBER_2.NAME"),
      title: t("TEAM.MEMBERS.MEMBER_2.TITLE"),
    },
    {
      image: "/images/se-g.jpg",
      name: t("TEAM.MEMBERS.MEMBER_3.NAME"),
      title: t("TEAM.MEMBERS.MEMBER_3.TITLE"),
    },
    {
      image: "/images/al.jpg",
      name: t("TEAM.MEMBERS.MEMBER_4.NAME"),
      title: t("TEAM.MEMBERS.MEMBER_4.TITLE"),
    },
  ];

  return (
    <Section {...props}>
      <Section.Title subtitle={t("TEAM.SUBTITLE")}>
        {t("TEAM.TITLE")}
      </Section.Title>

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
