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