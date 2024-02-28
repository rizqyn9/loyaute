import { ArrowIcon } from "@/components/icon/arrow"
import { cn } from "@/utils/cn"

type CarouselPaginationProps = {
  onNext?: () => void
  onPrev?: () => void
  idxActive: number
  amount: number
  onSelect?: (idx: number) => void
}

export function CarouselPagination(props: CarouselPaginationProps) {
  const { onNext, onPrev, idxActive, onSelect, amount } = props
  return (
    <div className="flex w-full justify-center gap-3 mt-12 items-center">
      <button className="rotate-180 mr-8" onClick={onPrev}>
        <ArrowIcon />
      </button>
      <div
        style={{
          minWidth: `calc(30px * ${amount})`,
        }}
        className="flex justify-between"
      >
        {Array.from(Array(amount).keys()).map(i => (
          <button
            key={i}
            className={cn(
              "h-[13px] transition-all duration-1000 rounded-full",
              idxActive === i ? "w-[40px] bg-primary" : "w-[13px] bg-[#C1C1C1]",
            )}
            onClick={() => {
              onSelect?.(i)
            }}
          />
        ))}
      </div>
      <button className="ml-8" onClick={onNext}>
        <ArrowIcon />
      </button>
    </div>
  )
}
