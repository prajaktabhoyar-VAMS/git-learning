
const { test, expect } = require('@playwright/test');

test('Home page loads correctly', async ({ page }) => {
  await page.goto('/index.html');

  await expect(page).toHaveTitle('Night Jasmine Project');
  await expect(
    page.getByRole('button', { name: 'Click Here' })
  ).toBeVisible();
});

test('Project page displays its heading and story link', async ({ page }) => {
  await page.goto('/project.html');

  await expect(page).toHaveTitle('Project by PSB');
  await expect(
    page.getByRole('heading', { name: 'Project by PSB' })
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'Discover the Parijat Story' })
  ).toHaveAttribute('href', 'parijat.html');
});
