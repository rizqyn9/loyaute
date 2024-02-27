type CarouselItemProps = {
  img: string
}

export function CarouselItem(props: CarouselItemProps) {
  const { img } = props
  return (
    <div className="embla__slide">
      <div className="embla__slide__number rounded-lg overflow-hidden aspect-[16/8]">
        <img src={img} alt="carousel" className="w-full object-cover h-full" />
      </div>
    </div>
  )
}
