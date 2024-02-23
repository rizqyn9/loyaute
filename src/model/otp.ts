import { z } from "zod"

export const otpDto = z.object({
  otp: z.string().length(4),
})

export type OtpDto = z.infer<typeof otpDto>
