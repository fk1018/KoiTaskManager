import { Any } from './Any';

describe('site interface', () => {
  describe('has a(n)',()=>{
    it('id',()=>{
      const site = Any.Site();

      expect(site.id).toBeTruthy();
    })
    it('name',()=>{
      const site = Any.Site();

      expect(site.name).toBeTruthy();
    })
  })
});
