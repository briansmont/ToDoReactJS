var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          //... is spread operator, lets you spread out all properties on an object into individual props
          <Todo key={todo.id} {...todo}/>
        );
      });
    };
    
    return (
      <div>
        {renderTodos()}
      </div>
    )
    
  }
});

module.exports = TodoList;