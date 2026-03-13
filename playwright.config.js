// @ts-check
import { defineConfig } from "@playwright/test";

export default defineConfig({
  // See https://playwright.dev/docs/test-configuration.
  testDir: "./tests",
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000", // Base URL to use in actions like `await page.goto('')`.
    headless: true,
  },
  webServer: {
    command: "npm run dev -- --port 3000", // Command to start the web server
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI, // Reuse the server if it's already running (useful for local development)
  },
});
