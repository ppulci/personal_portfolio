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

const autoplayOptions = {
  delay: 8000,
  stopOnMouseEnter: true,
  stopOnInteraction: true,
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

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
    <section className="embla w-full max-w-none h-[45rem]"> {/* forcing carousel to size to h-[45rem] */}
      {/* Force the viewport takes full width of parent column */}
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
        <div className="flex flex-row items-center justify-center gap-4">
          {/* Prev Button */}
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-200 hover:text-black transition-colors duration-200"
          />

          {/* Dots */}
          <div className="embla__dots flex gap-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-4 h-4 rounded-full transition-colors border-2 border-black ${
                  index === selectedIndex ? "bg-black" : "bg-white"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-200 hover:text-black transition-colors duration-200"
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
