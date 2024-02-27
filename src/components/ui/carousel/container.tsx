import ClassNames from "embla-carousel-class-names"
import useEmblaCarousel from "embla-carousel-react"

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [ClassNames()],
  )

  return (
    <div className="embla">
      <div className="w-full overflow-hidden embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array.from({ length: 5 }, (_, i) => i).map(x => (
            <div className="embla__slide embla__class-names">Slide {x}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
