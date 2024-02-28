import { apiClient } from "@/utils/api-client"
import type { RewardDto } from "./reward-dto"

export async function getRewards() {
  return apiClient.get<{ rewards: RewardDto[] }>("/reward/list")
}
