import { createAppSlice } from "@/app/create-app-slice"
import type { RewardDto } from "../reward/reward-dto"
import { getRewards } from "../reward/reward-api"

type DashboardSlice = {
  reward: {
    state: FetchState
    data: RewardDto[]
  }
}

const initialState: DashboardSlice = {
  reward: {
    state: "iddle",
    data: [],
  },
}

export const dashboardSlice = createAppSlice({
  name: "dashboard",
  initialState,
  reducers: create => ({
    getRewards: create.asyncThunk<RewardDto[]>(
      async () => {
        const result = await getRewards()
        return result.data.rewards
      },
      {
        pending: state => {
          state.reward.state = "loading"
        },
        rejected: (state, action) => {
          state.reward.state = "iddle"
        },
        fulfilled: (state, action) => {
          state.reward.state = "iddle"
          state.reward.data = action.payload
        },
      },
    ),
  }),
})

export const { actions: dashboardAction } = dashboardSlice
