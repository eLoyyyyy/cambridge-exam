import { test, expect } from '@playwright/test';

test("should see the home page", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Welcome",
    );
  });