// src/mocks/browser.ts

import { setupWorker } from "msw/browser"
import { http, HttpResponse } from "msw"

export const worker = setupWorker(
  ...[
    http.get("/user", () => {
      return HttpResponse.json({ name: "John Maverick" })
    }),
  ],
)
