import { renderWithThemeProvider } from 'utils/test/test-utils';
import { CartProvider } from 'contexts/cart-context';
import { mockCartProducts } from 'utils/test/mocks';

import CartProduct from '.';

describe('[components] - CartProduct', () => {
  it('should render successfully', (props = {}) => {
    const { baseElement } = renderWithThemeProvider(
      <CartProvider>
        <CartProduct product={mockCartProducts[0]} {...props} />
      </CartProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
});
