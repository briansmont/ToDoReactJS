import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    var response = actions.setSearchText(action.searchText);
    expect(response).toEqual(action);
  });
  
  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var response = actions.toggleShowCompleted();
    expect(response).toEqual(action);
  });
  
  it('should generate ADD_TODO action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123abc',
        text: 'sample text',
        completedAt: false,
        createdAt: 0
      },
    };
    var response = actions.addTodo(action.todo);
    expect(response).toEqual(action);
  });
  
  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'new todo item';
    
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });
  
  it('should generate add_todos action object', () => {
    var todos = [{
     id: '111',
     text: 'anything',
     completed: false,
     completedAt: undefined,
     createdAt: 500,
    }];
    
    var action = {
      type: 'ADD_TODOS',
      todos,
    };
    
    var response = actions.addTodos(todos);
    expect(response).toEqual(action);
    
  });
  
  it('should generate update Todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '1',
      updates: {completed: false},
    };
    var response = actions.updateTodo(action.id, action.updates);
    expect(response).toEqual(action);
  });
  
  describe('tests with FIREBASE todos', () => {
    var testTodoRef;
    
    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');
      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();
        
        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 101234
        });
      })
      .then(() => done())
      .catch(done);
    });
    
    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });
    
    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);
      
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done);
    });
    
    it('should populate todos & dispatch ADD_TODOS', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();
      
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        
        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Something to do');
        
        done();
      }, done);
    });
    
  });
});