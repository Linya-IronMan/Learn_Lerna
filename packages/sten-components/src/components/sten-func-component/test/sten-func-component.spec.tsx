import { newSpecPage } from '@stencil/core/testing';
import { StenFuncComponent } from '../sten-func-component';

describe('sten-func-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StenFuncComponent],
      html: `<sten-func-component></sten-func-component>`,
    });
    expect(page.root).toEqualHtml(`
      <sten-func-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sten-func-component>
    `);
  });
});
