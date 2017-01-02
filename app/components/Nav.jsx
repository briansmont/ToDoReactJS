var React = require('react');

var Nav = React.createClass({
  render: function() {
  
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Get Things Done</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text"> Created by Brian Mont</li>
          </ul>
        </div>
      </div>
      
    );
  }
});

module.exports = Nav;