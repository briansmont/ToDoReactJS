import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

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
  
  it('should generate toggle Todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '1',
    };
    var response = actions.toggleTodo(action.id);
    expect(response).toEqual(action);
  });
});