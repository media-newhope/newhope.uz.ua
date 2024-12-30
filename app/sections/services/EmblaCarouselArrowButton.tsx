import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import {
  IconButton,
  IconButtonProps,
} from "@/app/components/button/IconButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PrevButtonProps = IconButtonProps;

export const PrevButton = (props: PrevButtonProps) => {
  const { ...restProps } = props;

  return (
    <IconButton color="gray" size="sm" {...restProps}>
      <FaArrowLeft />
    </IconButton>
  );
};

type NextButtonProps = IconButtonProps;

export const NextButton = (props: NextButtonProps) => {
  const { ...restProps } = props;

  return (
    <IconButton color="gray" size="sm" {...restProps}>
      <FaArrowRight />
    </IconButton>
  );
};
