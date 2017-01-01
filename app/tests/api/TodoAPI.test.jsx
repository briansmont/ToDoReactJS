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
  
  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'sample text',
      completed: true,
    },{
      id: 2,
      text: 'sample text',
      completed: false,
    }, {
      id: 3,
      text: 'sample text', 
      completed: true,
    }];
    
    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      
      expect(filteredTodos.length).toBe(3);
    });
    
    it('should return all non-complete todos items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      
      expect(filteredTodos.length).toBe(1);
    });
    
    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      
      expect(filteredTodos[0].completed).toBe(false);
    });
    
    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'text');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
  
});