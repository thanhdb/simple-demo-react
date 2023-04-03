import { renderWithThemeProvider } from 'utils/test/test-utils';
import { CartProvider } from 'contexts/cart-context';
import { mockCartProducts } from 'utils/test/mocks';

import Product from '.';

describe('[components] - Product', () => {
  it('should render successfully', (props = {}) => {
    const { baseElement } = renderWithThemeProvider(
      <CartProvider>
        <Product product={mockCartProducts[0]} {...props} />
      </CartProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
});
