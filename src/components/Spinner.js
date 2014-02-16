/** @jsx React.DOM */

var React = require('react');

require('./Spinner.css');

var Spinner = React.createClass({
  render: function() {
    return <div className="Spinner" />;
  }
});

module.exports = Spinner;