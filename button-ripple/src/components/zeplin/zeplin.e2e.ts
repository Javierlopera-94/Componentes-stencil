import { newE2EPage } from '@stencil/core/testing';

describe('button-zeplin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-zeplin></button-zeplin>');

    const element = await page.find('button-zeplin');
    expect(element).toHaveClass('hydrated');
  });
});
