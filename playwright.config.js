// @ts-check
import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests/e2e",
  testMatch: /\.spec\.js$/,
  webServer: {
    command: "npm run start", // Command to start the web server
    url: "http://localhost:5500",
    reuseExistingServer: !process.env.CI, // Reuse the server if it's already running (useful for local development)
  },
  use: {
    baseURL: "http://localhost:5500",
    headless: true,
  },
});
