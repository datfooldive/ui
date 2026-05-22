import { describe, expect, test } from "vitest"

import { getTemplateForFramework } from "./templates"

describe("getTemplateForFramework", () => {
  test("maps Waku projects to the Vite template", () => {
    expect(getTemplateForFramework("waku")).toBe("vite")
  })
})
