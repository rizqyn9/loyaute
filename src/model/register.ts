import { z } from "zod"

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
