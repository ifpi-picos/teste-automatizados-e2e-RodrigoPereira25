import { test, expect } from '@playwright/test';

test('matricula', async ({ page }) => {
  await page.goto('https://refeitorio.picos.ifpi.edu.br/');
  await page.getByText('☰').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Usuário').click();
  await page.getByPlaceholder('Usuário').fill('2021118TADS0335');
  await page.getByPlaceholder('Senha').click();
  await page.getByPlaceholder('Senha').fill('ads22');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Open Profile Menu' }).click();
  await page.getByRole('link', { name: ' Perfil' }).click();
  await page.locator('#id_username').click();
  await page.locator('#id_username').fill('005588');
  await page.getByRole('button', { name: ' Salvar' }).click();
  await page.getByText('Perfil atualizado com sucesso').click();
  const notification = page.getByText('Perfil atualizado com sucesso')

  //Apenas voltando a matrícula para o formato correto, para que outros testes sejam realizados
  await page.getByRole('link', { name: 'Open Profile Menu' }).click();
  await page.getByRole('link', { name: ' Perfil' }).click();
  await page.locator('#id_username').click();
  await page.locator('#id_username').fill('2021118TADS0335');
  await page.getByRole('button', { name: ' Salvar' }).click();
  await page.getByText('Perfil atualizado com sucesso').click();
  await expect(notification).toBeFalsy()
});