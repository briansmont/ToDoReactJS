var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

// load foundation
// $(document).foundation();

// load APP Css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);