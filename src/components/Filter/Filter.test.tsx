import { renderWithThemeProvider } from 'utils/test/test-utils';
import { ProductsProvider } from 'contexts/products-context/';

import Filter from '.';

describe('[components] - Filter', () => {
  it('should render successfully', (props = {}) => {
    const { baseElement } = renderWithThemeProvider(
      <ProductsProvider>
        <Filter {...props} />
      </ProductsProvider>
    );

    expect(baseElement).toBeInTheDocument();
  });
});
