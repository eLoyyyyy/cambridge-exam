import { expect, test } from '@playwright/test';

test('minimum of 10 questions', async ({ page }) => {
    await page.goto('/ask')

    const groups = page.getByRole('group')
    await expect(page.getByRole('group')).toHaveCount(10)
})