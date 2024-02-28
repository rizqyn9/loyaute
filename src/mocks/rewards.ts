import type { RewardDto } from "@/features/reward/reward-dto"
import { HttpResponse, http } from "msw"

const REWARDS: RewardDto[] = [
  {
    name: "Monday Mood Booster Starbucks",
    thumbnail: "/img/reward/sb.png",
    point: 1_000,
    merchant: {
      name: "Starbucks",
      icon: "/img/merchant/sb.png",
    },
    tag: "Food",
  },
  {
    name: "Monday Mood Booster Starbucks",
    thumbnail: "/img/reward/sb.png",
    point: 1_000,
    merchant: {
      name: "Starbucks",
      icon: "/img/merchant/sb.png",
    },
    tag: "Groceries",
  },
  {
    name: "Monday Mood Booster Starbucks",
    thumbnail: "/img/reward/sb.png",
    point: 1_000,
    merchant: {
      name: "Starbucks",
      icon: "/img/merchant/sb.png",
    },
    tag: "Beverages",
  },
  {
    name: "Monday Mood Booster Starbucks",
    thumbnail: "/img/reward/sb.png",
    point: 1_000,
    merchant: {
      name: "Starbucks",
      icon: "/img/merchant/sb.png",
    },
    tag: "Food",
  },
]

export const rewardHandler = [
  http.get("/api/reward/list", async function (a) {
    return HttpResponse.json(
      {
        rewards: REWARDS,
      },
      { status: 200 },
    )
  }),
]
