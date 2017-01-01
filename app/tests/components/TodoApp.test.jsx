var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe ('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
  
  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    
    expect(todoApp.state.todos[0].text).toBe(todoText);
    
    //Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  
  it('should toggle completed value when handleToggle called', () => {
    var toDoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined,
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [toDoData]});
    
    //check todos array first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle on id:11
    todoApp.handleToggle(11);
    // expect that value has changed to true after handleToggle
    expect(todoApp.state.todos[0].completed).toBe(true);
    
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  
  it('should set completedAt to undefined when toggle completed changes from true to false', () => {
    var toDoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 500,
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [toDoData]});
    
    //check todos array first item has completed value of true
    expect(todoApp.state.todos[0].completed).toBe(true);
    //call handleToggle on id:11
    todoApp.handleToggle(11);
    // expect that value has changed to false after handleToggle
    expect(todoApp.state.todos[0].completed).toBe(false);
    
    // Expect completedAt to be undefined
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});