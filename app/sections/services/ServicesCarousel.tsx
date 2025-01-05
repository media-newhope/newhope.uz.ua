"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ServiceItem } from "@/app/sections/services/ServiceItem";
import {
  DotButton,
  useDotButton,
} from "@/app/sections/services/EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/app/sections/services/EmblaCarouselArrowButton";
import { EmblaOptionsType } from "embla-carousel";
import { getTranslation } from "@/app/lib/utils";
import { LANGUAGE } from "@/app/locales/models";

export function ServicesCarousel({ lang }: { lang: LANGUAGE }) {
  const options: EmblaOptionsType = { dragFree: false, align: "start" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const t = getTranslation(lang);

  const slides = [
    <ServiceItem
      key={0}
      title={t("SERVICES.KIDS.TITLE")}
      description={t("SERVICES.KIDS.DESC")}
      url="/images/kids.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={1}
      title={t("SERVICES.HOME.TITLE")}
      description={t("SERVICES.HOME.DESC")}
      url="/images/home-church.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={2}
      title={t("SERVICES.TEEN.TITLE")}
      description={t("SERVICES.TEEN.DESC")}
      url="/images/teen.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={3}
      url="/images/military.jpg"
      title={t("SERVICES.MILITARY.TITLE")}
      description={t("SERVICES.MILITARY.DESC")}
    ></ServiceItem>,
    <ServiceItem
      key={4}
      title={t("SERVICES.ADDICTED.TITLE")}
      description={t("SERVICES.ADDICTED.DESC")}
      url="/images/addicted.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={4}
      title={t("SERVICES.POOR.TITLE")}
      description={t("SERVICES.POOR.DESC")}
      url="/images/poor.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={5}
      title={t("SERVICES.BIBLE_SCHOOL.TITLE")}
      description={t("SERVICES.BIBLE_SCHOOL.DESC")}
      url="/images/bible.jpg"
    ></ServiceItem>,
  ];

  return (
    <div className="mx-[-0.75rem]">
      <div className="overflow-hidden mb-14" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-grow-0 flex-shrink-0 basis-1/2 md:basis-1/4 min-w-100px transform-[translate3d(0, 0, 0)] px-3"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
          p
        </PrevButton>
        {scrollSnaps.map((_, index) => {
          const dotStateClass =
            selectedIndex === index ? "bg-secondary-500" : "bg-gray-300";
          return (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${dotStateClass} rounded-[50%] w-4 h-4 mx-2 cursor-pointer`}
            />
          );
        })}
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
          n
        </NextButton>
      </div>
    </div>
  );
}
