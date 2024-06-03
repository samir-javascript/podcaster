"use client"
import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { podcastData } from '@/contants'


const EmblaCarousel = ({ fansLikeDetail }: any) => {
  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay || !("stopOnInteraction" in autoplay.options)) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? (autoplay.reset as () => void)
        : (autoplay.stop as () => void)

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

 

  return (
    <section className="flex w-full flex-col gap-4 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {podcastData.slice(0, 5).map((item) => (
          <figure
            key={item.id}
            className="carousel_box"
            onClick={() => router.push(`/podcasts/${item.id}`)}
          >
            <Image 
            src={item.imgURL}
            alt="card"
            fill
            className="absolute size-full rounded-xl border-none"
            />
            <div className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-4">
              <h2 className="text-14 font-semibold text-white-1">{item.title}</h2>
              <p className="text-12 font-normal text-white-2">{item.description}</p>
            </div>
          </figure>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            selected={index === selectedIndex}
            />
          ))}
      </div>
    </section>
  )
}

export default EmblaCarousel
