import {Any} from './Any';
import {Proxy} from '../models/Proxy';
describe('Proxy Model', () => {
  describe('Testing generic used to test proxy: ', () => {
    describe('When proxy is created with empty params:',()=>{
      it('id value to be truthy',()=>{
        const proxy = Any.Proxy(<Proxy>{});
        
        expect(proxy.id).toBeTruthy();
      });
      it('server value to be truthy',()=>{
        const proxy = Any.Proxy(<Proxy>{});
        
        expect(proxy.server).toBeTruthy();
      });
    });
  });
});