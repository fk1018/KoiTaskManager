import {Any} from './Any';

describe('Task Model:', () => {
  describe('Testing generic used to test task: ', () => {
    describe('When task is created with empty params:',()=>{
      it('task has an id property',()=>{
        const beforeTask = Any.Task({});
        
        expect(beforeTask).toHaveProperty('id');
      });
      it('task has an name property',()=>{
        const beforeTask = Any.Task({});
        
        expect(beforeTask).toHaveProperty('name');
      });
    });
  });
});