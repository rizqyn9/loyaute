import type { RewardDto } from "@/features/reward/reward-dto"
import { Link } from "react-router-dom"

type RewardProps = RewardDto
export function CardReward(props: RewardProps) {
  const { name, thumbnail, point, merchant } = props
  return (
    <Link to={`/details/${encodeURI(name.replaceAll(" ", "-").toLowerCase())}`}>
      <div className="flex flex-col gap-1">
        <img
          className="w-full aspect-[1/1] object-cover"
          src={thumbnail}
          alt={name}
        />
        <div className="flex gap-2 items-center mt-4">
          {merchant.icon && (
            <img
              src={merchant.icon}
              className="w-[24px] aspect-[1/1] object-cover object-center"
              alt={merchant.name}
            />
          )}
          <p>{merchant.name}</p>
        </div>
        <p className="line-clamp-1 font-semibold text-xl">{name}</p>
        <p className="text-[#979797]">Point Earned</p>
        <div className="flex gap-2 items-center">
          <img className="w-[20px]" src="/img/icon/point.png" alt="point" />
          <p>{point}</p>
        </div>
      </div>
    </Link>
  )
}
