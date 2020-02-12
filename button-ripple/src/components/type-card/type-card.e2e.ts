import { newE2EPage } from '@stencil/core/testing';

describe('type-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<type-card></type-card>');

    const element = await page.find('type-card');
    expect(element).toHaveClass('hydrated');
  });
});
