import { renderWithThemeProvider } from 'utils/test/test-utils';
import { mockProducts } from 'utils/test/mocks';

import { CartProvider } from 'contexts/cart-context';
import Products from '.';

describe('[components] - Products', () => {
  it('should render successfully', (props = {}) => {
    const { baseElement } = renderWithThemeProvider(
      <CartProvider>
        <Products products={mockProducts} {...props} />
      </CartProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
});
