import { Any } from './Any';

describe('proxy list interface', () => {
  describe('has a(n)', () => {
    it('id', () => {
      const proxyList = Any.ProxyList();

      expect(proxyList.id).toBeTruthy();
    });
    it('name', () => {
      const proxyList = Any.ProxyList();

      expect(proxyList.name).toBeTruthy();
    });
  });
});
