import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

var TodoAPI = require('TodoAPI');
var Nav = require('Nav');

export var TodoApp = React.createClass({
  onSignOut(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    
    dispatch(actions.startLogout());
  },
  
  render(){
    return (
      <div>
        <Nav/>
        <div className="page-actions">
          <a href="#" onClick={this.onSignOut}>Sign out</a>
        </div>
      
        
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);