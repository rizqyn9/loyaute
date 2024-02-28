import { createAppSlice } from "@/app/create-app-slice"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { LoginDto, LoginResult, UserData } from "./auth-dto"
import { doLogin } from "./auth-api"

type AuthSlice = {
  state: FetchState
  userData: UserData | null
  isAuthenticated: boolean
}

const initialState: AuthSlice = {
  state: "iddle",
  userData: null,
  isAuthenticated: false,
}

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: create => ({
    login: create.asyncThunk<LoginResult, LoginDto>(
      async payload => {
        const result = doLogin(payload)
        return result
      },
      {
        pending: state => {
          state.state = "loading"
        },
        rejected: (state, action) => {
          state.state = "iddle"
        },
        fulfilled: (state, action) => {
          state.state = "iddle"
          state.isAuthenticated = true
          state.userData = action.payload
        },
      },
    ),
    setAuthenticated: create.reducer(
      (state, action: PayloadAction<UserData>) => {
        state.userData = action.payload
        state.isAuthenticated = true
      },
    ),
    reset: create.reducer(state => {
      state = initialState
    }),
  }),
  selectors: {
    getUserData: ({ userData }) => userData,
  },
})

export const { actions: authAction } = authSlice
