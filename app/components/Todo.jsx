var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {text, id, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = 'created ';
      var timestamp = createdAt;
      
      if (completed) {
        message = 'completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    };
    
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        <strong>{text}</strong> <small>{renderDate()}</small>
      </div>
    );
    
  }
});

module.exports = Todo;