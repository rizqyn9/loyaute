import { setupWorker } from "msw/browser"
import { http, HttpResponse } from "msw"
import type { LoginResult, LoginDto } from "@/features/auth/auth-dto"
import { rewardHandler } from "./rewards"

export const worker = setupWorker(
  ...[
    http.post("/api/auth/login", async function ({ request }) {
      const login = (await request.json()) as LoginDto

      if (login.password !== "valid") {
        return HttpResponse.json({}, { status: 401 })
      }

      return HttpResponse.json(
        {
          username: "Test Account",
          email: login.email,
        } satisfies LoginResult,
        { status: 200 },
      )
    }),
    ...rewardHandler,
  ],
)
