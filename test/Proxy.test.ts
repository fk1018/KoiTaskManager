import { Any } from './Any';

describe('proxy interface', () => {
  describe('has a(n)',()=>{
    it('id',()=>{
      const proxy = Any.Proxy();

      expect(proxy.id).toBeTruthy();
    })
    it('password',()=>{
      const proxy = Any.Proxy();

      expect(proxy.password).toBeTruthy();
    })
    it('uri',()=>{
      const proxy = Any.Proxy();

      expect(proxy.uri).toBeTruthy();
    })
    it('userName',()=>{
      const proxy = Any.Proxy();

      expect(proxy.userName).toBeTruthy();
    })
  })
});
