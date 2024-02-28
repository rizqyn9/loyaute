import { apiClient } from "@/utils/api-client"
import type { LoginDto, LoginResult } from "./auth-dto"

export async function doLogin(payload: LoginDto) {
  const { data } = await apiClient.post<LoginResult>("/auth/login", payload)

  return data
}
