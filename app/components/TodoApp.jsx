var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1, text: 'Feed Benny',
        },
        {
          id: 2, text: 'Pick up stamps',
        },
        {
          id: 3, text: 'Flowers for Kirstin',
        },
        {
          id: 4, text: 'Buy shovel for winter',
        },
      ]
    };
  },
  
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  
  render: function() {
    var {todos} = this.state;
    
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onNewTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;