import { renderWithThemeProvider } from 'utils/test/test-utils';
import { CartProvider } from 'contexts/cart-context';
import { screen } from '@testing-library/react';

import Cart from '.';

describe('[components] - Cart', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithThemeProvider(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
});
