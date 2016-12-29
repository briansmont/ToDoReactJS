var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var $ = require('jQuery');

// load foundation

//$(document).foundation();

// load APP Css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <p>Boilerplate code, for router, check out timer app or weather app!</p>,
  document.getElementById('app')
);