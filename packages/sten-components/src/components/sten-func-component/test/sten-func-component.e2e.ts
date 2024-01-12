import { newE2EPage } from '@stencil/core/testing';

describe('sten-func-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sten-func-component></sten-func-component>');

    const element = await page.find('sten-func-component');
    expect(element).toHaveClass('hydrated');
  });
});
