import { newE2EPage } from '@stencil/core/testing';

describe('direct-access', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<direct-access></direct-access>');

    const element = await page.find('direct-access');
    expect(element).toHaveClass('hydrated');
  });
});
