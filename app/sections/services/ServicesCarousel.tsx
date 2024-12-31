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

export function ServicesCarousel() {
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

  const slides = [
    <ServiceItem
      key={0}
      title="Недільна школа для дітей"
      description="Недільна школа для дітей пропонує захоплюючі уроки, які допомагають зрозуміти біблійні історії через ігри та творчість."
      url="/images/kids.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={1}
      title="Домашні церкви"
      description="Малі групи віруючих, які збираються по домівках для спільного вивчення Біблії, молитви та підтримки один одного у теплій, сімейній атмосфері."
      url="/images/home-church.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={2}
      title="Teen Zone"
      description="Спеціальна програма для підлітків, де вони можуть зростати у вірі, спілкуватися з однолітками та розвивати свої таланти у дружній атмосфері."
      url="/images/teen.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={3}
      title="Служіння військовим"
      url="/images/military.jpg"
      description="Духовна та практична підтримка військовослужбовців та їхніх сімей через молитву, спілкування та різні форми допомоги."
    ></ServiceItem>,
    <ServiceItem
      key={4}
      title="Недільна школа для дітей"
      description="Недільна школа для дітей пропонує захоплюючі уроки, які допомагають зрозуміти біблійні історії через ігри та творчість."
      url="/images/kids.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={5}
      title="Домашні церкви"
      description="Малі групи віруючих, які збираються по домівках для спільного вивчення Біблії, молитви та підтримки один одного у теплій, сімейній атмосфері."
      url="/images/home-church.jpg"
    ></ServiceItem>,
    <ServiceItem
      key={6}
      title="Домашні церкви"
      description="Малі групи віруючих, які збираються по домівках для спільного вивчення Біблії, молитви та підтримки один одного у теплій, сімейній атмосфері."
      url="/images/home-church.jpg"
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
