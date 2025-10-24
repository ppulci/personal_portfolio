"use client";

import React, { useCallback, useEffect, useRef } from "react";
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
  carouselHeight?: string;
};

const autoplayOptions = {
  delay: 8000,
  stopOnMouseEnter: true,
  stopOnInteraction: true,
};

const EmblaCarousel: React.FC<PropType> = ({
  slides,
  options,
  carouselHeight = "h-[45rem]",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (!carouselContainerRef.current || !emblaApi) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          emblaApi.scrollTo(0);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(carouselContainerRef.current);
    return () => observer.disconnect();
  }, [emblaApi]);

  return (
    <section
      ref={carouselContainerRef}
      className={`embla w-full max-w-none ${carouselHeight}`}
    >
      {/* Viewport */}
      <div className="embla__viewport w-full h-[90%] overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y h-full">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] h-full px-4">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls absolute bottom-0 w-full h-[10%] flex items-center justify-center px-12">
        <div className="flex flex-row items-center justify-center gap-4">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-200 transition-colors duration-200"
          />

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

          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-200 transition-colors duration-200"
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
