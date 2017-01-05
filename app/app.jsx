var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('fold laundry'));
store.dispatch(actions.setSearchText('fold'));
store.dispatch(actions.toggleShowCompleted());

// load foundation
// $(document).foundation();

// load APP Css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);