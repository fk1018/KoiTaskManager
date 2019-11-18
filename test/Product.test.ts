import { Any } from './Any';

describe('product interface', () => {
  describe('has a(n)', () => {
    it('id', () => {
      const product = Any.Product();

      expect(product.id).toBeTruthy();
    });
    it('name', () => {
      const product = Any.Product();

      expect(product.name).toBeTruthy();
    });
    it('productId', () => {
      const product = Any.Product();

      expect(product.productId).toBeTruthy();
    });
    it('url', () => {
      const product = Any.Product();

      expect(product.url).toBeTruthy();
    });
    it('imgUrl', () => {
      const product = Any.Product();

      expect(product.imgUrl).toBeTruthy();
    });
    it('styleCode', () => {
      const product = Any.Product();

      expect(product.styleCode).toBeTruthy();
    });
  });
});
