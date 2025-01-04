"use client";
import { HTMLAttributes, useState } from "react";
import { getGospelItems } from "@/app/sections/gospel/gospel-content";
import { GospelIcon, Icon } from "@/app/components/Icon";
import { Button } from "@/app/components/button/Button";
import { LANGUAGE } from "@/app/locales/models";
import { getTranslation } from "@/app/lib/utils";

interface MainTileContent {
  desc: React.ReactNode;
  refs: string[];
  icon: GospelIcon;
}

interface GospelMainTileProps extends HTMLAttributes<HTMLElement> {
  tileContent?: MainTileContent | undefined;
  lang: LANGUAGE;
}

const GospelMainTile = ({
  className,
  tileContent,
  lang,
}: GospelMainTileProps) => {
  const t = getTranslation(lang);
  return (
    <div
      className={`${className} 
        bg-black/70 backdrop-blur-sm text-white
        p-6 
        flex flex-col items-center justify-center
        transition-transform duration-300 hover:transform
        row-span-2
      `}
    >
      {tileContent?.icon && (
        <Icon name={tileContent.icon} className="mb-4" size={40} />
      )}
      {!tileContent && (
        <h3 className="text-center font-semibold text-5xl uppercase">
          {t("GOSPEL.TITLE")}
        </h3>
      )}
      {tileContent && (
        <>
          <div className="mb-8">{tileContent.desc}</div>
          <div className="mb-8">
            {tileContent.refs.map((ref) => (
              <span key={ref} className="text-nowrap uppercase mr-2">
                {ref}
              </span>
            ))}
          </div>
          <Button className="uppercase w-full">У мене є питання</Button>
        </>
      )}
    </div>
  );
};

interface GospelTileProps extends HTMLAttributes<HTMLElement> {
  icon: GospelIcon;
  title: string;
  selected: boolean;
}

const GospelTile = ({
  icon,
  title,
  className,
  selected,
  ...props
}: GospelTileProps) => {
  const selectedClass = selected
    ? "bg-white"
    : "bg-white/80 hover:bg-white cursor-pointer";

  const selectedIconClass = selected
    ? "scale-150 transition-transform-left-top left-[50%] top-[50%]"
    : "left-12 top-12";

  const selectedTitle = selected ? "text-center" : "";
  return (
    <div
      className={`${className} 
        ${selectedClass}
        h-[280px]
        p-8
        flex flex-col
        duration-300
        transition-color
        relative
      `}
      {...props}
    >
      {}
      <Icon
        name={icon}
        className={`mb-4  absolute mt-[-19px] ml-[-19px] duration-300 ${selectedIconClass} ${selectedTitle}`}
        size={40}
      />
      {!selected && (
        <h3 className="uppercase font-semibold text-3xl mt-14">{title}</h3>
      )}
    </div>
  );
};

export function GospelWidget({ lang }: { lang: LANGUAGE }) {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const gospelItems = getGospelItems(lang);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  max-w-5xl mx-auto">
      <GospelMainTile
        lang={lang}
        tileContent={
          !!selectedIndex ? gospelItems[selectedIndex].details : undefined
        }
        className="mb-6 md:mr-6 md:mb-0"
      />

      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <GospelTile
          icon={gospelItems[0].icon}
          title={gospelItems[0].title}
          selected={selectedIndex === 0}
          onClick={() => setSelectedIndex(0)}
        />

        <GospelTile
          icon={gospelItems[1].icon}
          title={gospelItems[1].title}
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        />
        <GospelTile
          icon={gospelItems[2].icon}
          title={gospelItems[2].title}
          selected={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
        />
        <GospelTile
          icon={gospelItems[3].icon}
          title={gospelItems[3].title}
          selected={selectedIndex === 3}
          onClick={() => setSelectedIndex(3)}
        />
      </div>
    </div>
  );
}
