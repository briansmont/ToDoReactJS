var expect = require('expect');
var actions = require('actions');

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
      text: 'sample to do',
    };
    var response = actions.addTodo(action.text);
    expect(response).toEqual(action);
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