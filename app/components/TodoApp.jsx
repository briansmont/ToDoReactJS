var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(), text: 'Feed Benny', completed: false,
        },
        {
          id: uuid(), text: 'Pick up stamps', completed: true,
        },
        {
          id: uuid(), text: 'Check mail', completed: true,
        },
        {
          id: uuid(), text: 'Buy shovel for winter', completed: false,
        },
      ]
    };
  },
  
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: uuid(),
          text: text,
          completed: false,
        }
      ],
    })
  },
  
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map ((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
    
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onNewTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;