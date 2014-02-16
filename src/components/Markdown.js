/** @jsx React.DOM */

var React = require('react');

var showdown = require('showdown');

var converter = new showdown.converter();

var Markdown = React.createClass({
  render: function() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(this.props.children)
        }}
      />
    );
  }
});

module.exports = Markdown;