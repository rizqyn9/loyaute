import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/create-app-slice"

type UserData = {
  name: string
  email: string
  phoneNumber: {
    prefix: string
    value: string
  }
  password: string
}

type RegisterSliceState = {
  userData: UserData | null
  step: "submission" | "otp" | "success"
  otp: null | string
}

const initialState: RegisterSliceState = {
  userData: null,
  step: "submission",
  otp: null,
}

export const registerSlice = createAppSlice({
  name: "register",
  initialState,
  reducers: create => ({
    reset: create.reducer(state => {
      state = initialState
    }),
    submit: create.reducer((state, action: PayloadAction<UserData>) => {
      state.userData = action.payload
      state.step = "otp"
    }),
    validateOtp: create.reducer(
      (state, action: PayloadAction<{ otp: string }>) => {
        if (state.step !== "otp") return
        // OTP CHECK
        // Just return
        state.step = "success"
      },
    ),
  }),
  selectors: {
    getStep: data => data.step,
    getUserData: ({ userData }) => userData,
    getPhoneNumber: ({ userData }) => {
      if (!userData) return null
      const { prefix, value } = userData.phoneNumber
      return prefix + value
    },
  },
})

export const { actions: registerAction, selectors: registerSelector } =
  registerSlice
