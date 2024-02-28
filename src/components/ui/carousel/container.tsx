import { CarouselItem } from "./item"
import { useCallback, useEffect, useRef, useState } from "react"
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { CarouselPagination } from "./pagination"

const MOCK =
  "https://images.unsplash.com/photo-1524697958400-63970dc9e178?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"

const TWEEN_FACTOR_BASE = 0.3

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

export function EmblaCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === "scroll"

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach(loopItem => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          if (!tweenNode) return
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    [],
  )

  const onSelectedIndex = useCallback(() => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("select", onSelectedIndex)
      .on("reInit", onSelectedIndex)
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenScale, onSelectedIndex])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container">
            {Array.from({ length: 5 }, (_, i) => MOCK).map((x, i) => (
              <CarouselItem img={x} key={i} />
            ))}
          </div>
        </div>
      </div>
      <CarouselPagination
        idxActive={selectedIndex}
        amount={5}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
        onSelect={idx => emblaApi?.scrollTo(idx)}
      />
    </>
  )
}
