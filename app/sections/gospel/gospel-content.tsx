import { GospelIcon } from "@/app/components/Icon";

export const gospelItems = [
  {
    icon: "love" as GospelIcon,
    title: "Бог любить мене",
    details: {
      desc: (
        <>
          <p className="mb-3">
            Бог зробив усе щоб показати наскільки сильно Він любить нас. Він
            пропонує нам вічне та повне життя. Ми можемо мати таке життя, якщо
            довіримо себе Ісусу.
          </p>
          <p className="mb-3">
            У Біблії написано, що усім ти хто повірив у Нього, Він дав право
            мати життя вічне
          </p>
          <p>
            Все що нам потрібно - це звернутись до Бога і попросити прощення за
            те, що ми керували своїм життям без Нього
          </p>
        </>
      ),
      refs: ["Івана 1:12", "Об’явлення 3:20"],
      icon: "love" as GospelIcon,
    },
  },
  {
    icon: "separation" as GospelIcon,
    title: "Я згрішив",
    details: {
      desc: <></>,
      refs: [""],
      icon: "separation" as GospelIcon,
    },
  },
  {
    icon: "cross" as GospelIcon,
    title: "Ісус помер за мене",
    details: {
      desc: <></>,
      refs: [""],
      icon: "cross" as GospelIcon,
    },
  },
  {
    icon: "decision" as GospelIcon,
    title: "Мені потрібно слідувати за Ісусом",
    details: {
      desc: <></>,
      refs: [""],
      icon: "decision" as GospelIcon,
    },
  },
];
