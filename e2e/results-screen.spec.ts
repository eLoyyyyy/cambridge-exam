import { expect, test } from '@playwright/test';

test('score is diplayed', async ({ page }) => {
    await page.goto('/result?score=50')

    await expect(page.getByRole('heading', { name: 'score' })).toBeVisible()
})

test('score should display the corresponding score', async ({ page }) => {
    await page.goto('/result?score=50')

    await expect(page.getByRole('heading', { name: 'score' })).toContainText('50')
})