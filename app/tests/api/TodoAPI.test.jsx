var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  //test lifecycle method to follow:
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  
  
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
  
  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 1,
        text: 'sample task',
        completed: false,
      }];
      
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      
      expect(actualTodos).toEqual(todos);
    });
    it('should not set INVALID todos array', () => {
      var badTodos = {value: 'bad information'};
      TodoAPI.setTodos(badTodos);
      
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });
  
  describe('getTodos', () => {
    it('should return an empty array when there is bad/no data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    
    it('should return todo if valid array exists in the localStorage', () => {
      var todos = [{
        id: 1,
        text: 'sample task',
        completed: false,
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      
      var actualTodos = TodoAPI.getTodos();
      
      expect(actualTodos).toEqual(todos);
    });
  });
});