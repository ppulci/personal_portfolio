"use client";

import React, { useCallback, useEffect, useState, ComponentPropsWithRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((embla: EmblaCarouselType) => {
    setScrollSnaps(embla.scrollSnapList());
  }, []);

  const onSelect = useCallback((embla: EmblaCarouselType) => {
    setSelectedIndex(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onInit).off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type BtnPropType = ComponentPropsWithRef<"button">;

export const DotButton: React.FC<BtnPropType> = (props) => {
  const { children, ...restProps } = props;
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((embla: EmblaCarouselType) => {
    setPrevBtnDisabled(!embla.canScrollPrev());
    setNextBtnDisabled(!embla.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton: React.FC<BtnPropType> = (props) => {
  const { children, ...restProps } = props;
  return (
    <button className="embla__button embla__button--prev" type="button" {...restProps}>
      <svg className="embla__button__svg" viewBox="0 0 532 532" width="18" height="18" aria-hidden>
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton: React.FC<BtnPropType> = (props) => {
  const { children, ...restProps } = props;
  return (
    <button className="embla__button embla__button--next" type="button" {...restProps}>
      <svg className="embla__button__svg" viewBox="0 0 532 532" width="18" height="18" aria-hidden>
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

type EmblaCarouselProps = {
  slides: React.ReactNode[]; // slide contents
  options?: EmblaOptionsType;
  autoplayOptions?: { delay?: number; stopOnInteraction?: boolean; stopOnMouseEnter?: boolean };
  // Tailwind max-height class (e.g. "max-h-[80vh]" or "h-[70vh]" ). Defaults to viewport-based limit.
  maxHeight?: string;
  // Tailwind min-height class (e.g. "min-h-[60vh]" or "h-[70vh]" ). Defaults to viewport-based limit.
  minHeight?: string;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options, autoplayOptions, maxHeight = "max-h-[45rem]", minHeight = "min-h-[45rem]" }) => {
  // include Autoplay plugin instance in second arg — pass config here (delay in ms)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  const onNavButtonClick = useCallback((api: EmblaCarouselType) => {
    const autoplay = api?.plugins()?.autoplay;
    if (!autoplay) return;
    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick
  );

  return (
    // constrain overall carousel height so it stays within one screen
    <div className={`embla w-full h-full flex flex-col ${maxHeight} ${minHeight}`}>
      {/* viewport (flex-grow fills available space above controls) */}
      <div className="embla__viewport flex-grow overflow-hidden" ref={emblaRef as any}>
        {/* horizontal, no-wrap container; slides sized to exact width and height of viewport area */}
        <div className="embla__container flex flex-nowrap gap-6 h-full">
          {slides.flat().map((slide, index) => (
            <div className="embla__slide flex-none w-full h-full box-border" key={index}>
              {/* inner: center content, but allow internal scroll if content is taller than this area */}
              <div className="embla__slide__inner h-full flex items-start justify-center overflow-auto box-border">
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* controls area (bottom 10%): left arrow, centered dots, right arrow */}
      <div className="h-[10%] flex items-center justify-center px-4">
        {/* left / prev */}
        <div className="flex items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>

        {/* dots centered */}
        <div className="flex justify-center mx-10">
          <div className="embla__dots flex gap-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot h-2 w-8 rounded-full transition-colors ${index === selectedIndex ? "embla__dot--selected bg-slate-800" : "bg-slate-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* right / next */}
        <div className="flex items-center">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;