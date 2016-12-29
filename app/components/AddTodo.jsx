var React = require('react');

var AddTodo = React.createClass({
  
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onNewTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
    
  },
  
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input autoFocus type="text" ref="todoText" placeholder="Enter new to-do"/>
          <button className="button expanded">Add to-do!</button>
        </form>
      
      </div>
    );
  }
});

module.exports = AddTodo;