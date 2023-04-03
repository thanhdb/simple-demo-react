import { renderWithThemeProvider } from 'utils/test/test-utils';
import { mockCartProducts } from 'utils/test/mocks';

import { CartProvider } from 'contexts/cart-context';
import CartProducts from '.';

describe('[components] - CartProducts', () => {
  it('should render successfully', (props = {}) => {
    const { baseElement } = renderWithThemeProvider(
      <CartProvider>
        <CartProducts products={mockCartProducts} {...props} />
      </CartProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
});
