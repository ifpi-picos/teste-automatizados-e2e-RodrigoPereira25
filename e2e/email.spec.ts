import { test, expect } from '@playwright/test';

test('email', async ({ page }) => {
  await page.goto('https://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Usuário').fill('2021118TADS0335');
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('ads22');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Open Profile Menu' }).click();
  await page.getByRole('link', { name: ' Perfil' }).click();
  await page.locator('#id_email').click();
  await page.locator('#id_email').fill('ca.2021118tads03@ifpi.edu.br');
  await page.getByRole('button', { name: ' Salvar' }).click();
  await page.getByText('Perfil atualizado com sucesso').click();
  await expect(page.getByText('Perfil atualizado com sucesso')).toBeFalsy()
});