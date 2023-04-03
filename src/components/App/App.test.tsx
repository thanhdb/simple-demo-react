import { renderWithThemeProvider } from 'utils/test/test-utils';
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from '.';

describe('[components] - App', () => {
  const setup = () => {
    return renderWithThemeProvider(
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    );
  };

  it('should render successfully', () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
