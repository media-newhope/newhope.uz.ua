import { Section } from "@/app/components/Section/Section";
import { HTMLAttributes } from "react";
import { ServiceItem } from "@/app/sections/services/ServiceItem";

type ServicesSectionProps = HTMLAttributes<HTMLElement>;

export function ServicesSection({ ...props }: ServicesSectionProps) {
  return (
    <Section {...props} className="bg-gray-100">
      <Section.Title subtitle="наші служіння">
        кожен знайде щось для себе
      </Section.Title>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <ServiceItem
          title="Недільна школа для дітей"
          description="Недільна школа для дітей пропонує захоплюючі уроки, які допомагають зрозуміти біблійні історії через ігри та творчість."
          url="/images/kids.jpg"
        ></ServiceItem>
        <ServiceItem
          title="Домашні церкви"
          description="Малі групи віруючих, які збираються по домівках для спільного вивчення Біблії, молитви та підтримки один одного у теплій, сімейній атмосфері."
          url="/images/home-church.jpg"
        ></ServiceItem>
        <ServiceItem
          title="Teen Zone"
          description="Спеціальна програма для підлітків, де вони можуть зростати у вірі, спілкуватися з однолітками та розвивати свої таланти у дружній атмосфері."
          url="/images/teen.jpg"
        ></ServiceItem>
        <ServiceItem
          title="Служіння військовим"
          url="/images/military.jpg"
          description="Духовна та практична підтримка військовослужбовців та їхніх сімей через молитву, спілкування та різні форми допомоги."
        ></ServiceItem>
      </div>
    </Section>
  );
}
