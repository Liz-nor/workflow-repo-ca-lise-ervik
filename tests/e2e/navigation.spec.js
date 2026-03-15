import { test, expect } from "@playwright/test";

test("user is able to navigate to the home page and open a venue", async ({
  page,
}) => {
  // Navigate to the index page
  await page.goto("/index.html");

  // Click on the "Home" link to navigate to the home page
  await page.getByRole("link", { name: "Home" }).click();

  // Wait for the page to load
  await page.waitForEvent("load");

  // Wait for the venue container to be visible and click on it
  const venueContainer = page.locator("#venue-container");
  await expect(venueContainer).toBeVisible();

  // Click the first venue on the list
  const firstVenue = venueContainer.locator("a").first();
  await firstVenue.click();

  // Verify the venue details page loads
  await expect(
    page.getByRole("heading", { name: /Venue details/i }),
  ).toBeVisible();
});
