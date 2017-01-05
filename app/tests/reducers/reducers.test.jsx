var expect = require('expect');

// deep freeze can only be called to protect objects from being assigned new readonly properties
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test',
      };
      var response = reducers.searchTextReducer('', df(action));
      expect(response).toEqual(action.searchText);
    });
  });
  
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var response = reducers.showCompletedReducer(false, df(action));
      expect(response).toEqual(true);
      
    }); 
  });

  describe('todosReducer', () => {
    it('should add new todo to todos array state', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'sample to do item',
      };
      var response = reducers.todosReducer([], df(action));
      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);
    });
    
    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'sample text',
        completed: true,
        createdAt: 123,
        completedAt: 150,
      }];
      
      var action = {
        type: 'TOGGLE_TODO',
        id: '123',
      };
      
      var response = reducers.todosReducer(todos, df(action));
      expect(response[0].completed).toEqual(false);
      expect(response[0].completedAt).toEqual(undefined);
    });
  });
  
});