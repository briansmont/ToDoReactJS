var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
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
  
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase(),
    });
  },
  
  render: function() {
    var {todos} = this.state;
    
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onNewTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;