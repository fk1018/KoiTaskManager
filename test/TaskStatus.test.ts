import { Any } from './Any';

describe('task status interface', () => {
  describe('has a(n)',()=>{
    it('id',()=>{
      const taskStatus = Any.TaskStatus();

      expect(taskStatus.id).toBeTruthy();
    })
    it('display',()=>{
      const taskStatus = Any.TaskStatus();

      expect(taskStatus.display).toBeTruthy();
    })
  })
});
