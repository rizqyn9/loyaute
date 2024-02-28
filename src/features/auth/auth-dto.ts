import { z } from "zod"

export const loginDto = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export type LoginDto = z.infer<typeof loginDto>

export type LoginResult = {
  username: string
  email: string
}

export type UserData = {
  email: string
  username: string
}

export const otpDto = z.object({
  otp: z.string().length(4),
})

export type OtpDto = z.infer<typeof otpDto>

export const registerDto = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email(),
  phoneNumber: z.object({
    prefix: z.string(),
    value: z.string().min(1),
  }),
  password: z.string().min(1),
})

export type RegisterDto = z.infer<typeof registerDto>
