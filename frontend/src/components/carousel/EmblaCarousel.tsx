"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla w-full max-w-none h-[45rem]">
      {/* Viewport takes full width of parent column */}
      <div
        className="embla__viewport w-full h-[90%] overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex touch-pan-y h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] h-full px-4"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls absolute bottom-0 w-full h-[10%] flex items-center justify-center px-12">
        {/* Center group: arrows + dots inline */}
        <div className="flex flex-row items-center justify-center gap-4">
          {/* Prev Button */}
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shadow-md hover:bg-white hover:text-black transition-colors duration-200"
          />

          {/* Dots */}
          <div className="embla__dots flex gap-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-4 h-4 rounded-full transition-colors border border-black ${
                  index === selectedIndex ? "bg-black" : "bg-white"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shadow-md hover:bg-white hover:text-black transition-colors duration-200"
          />
        </div>

        {/* Info icon aligned to far right */}
        <div
          className="absolute right-8 text-2xl font-bold text-black hover:text-gray-700 cursor-pointer select-none transition-all duration-200"
          title="Logos and trademarks are property of their respective owners and are used for identification purposes only."
        >
          &#9432;
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
