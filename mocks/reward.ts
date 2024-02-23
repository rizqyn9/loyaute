export const REWARDS: Array<{
  name: string
  thumbnail: string
  point: number
  merchant: {
    name: string
    icon: string
  }
}> = [
  {
    name: "Monday Mood Booster Starbucks",
    thumbnail: "/img/reward/sb.png",
    point: 1_000,
    merchant: {
      name: "Starbucks",
      icon: "/img/merchant/sb.png",
    },
  },
]
