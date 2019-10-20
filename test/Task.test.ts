import {Any} from './Any';

describe('Task Model', () => {
  describe('Testing generic used to test task: ', () => {
    describe('When task is created with empty params:',()=>{
      it('id value to be truthy',()=>{
        const beforeTask = Any.Task({});
        
        expect(beforeTask.id).toBeTruthy();
      });
      it('name value to be truthy',()=>{
        const beforeTask = Any.Task({});
        
        expect(beforeTask.name).toBeTruthy();
      });
    });
  });
});