var React = require('react');
var TodoList = require('TodoList');

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
  
  render: function() {
    var {todos} = this.state;
    
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;