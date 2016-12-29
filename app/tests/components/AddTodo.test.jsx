var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe ('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  
  it('should call onAddTodo prop with valid data', () => {
    var todoText = 'Send Mail';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    
    expect(spy).toHaveBeenCalledWith(todoText);
  });
  
  it('should NOT call onAddTodo prop with INVALID input', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    
    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    
    expect(spy).toNotHaveBeenCalled();
  });
  
  
});