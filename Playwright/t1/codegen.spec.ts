import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await page.getByRole('checkbox').first().check();
  await expect(page.getByText('checkbox 1 checkbox')).toBeVisible();
  await expect(page.locator('#checkboxes')).toContainText('checkbox 1 checkbox 2');
});