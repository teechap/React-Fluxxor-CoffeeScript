// Generated by CoffeeScript 1.9.2
(function() {
  var FluxMixin, Fluxxor, React;

  Fluxxor = require('fluxxor');

  React = require('react');

  FluxMixin = Fluxxor.FluxMixin(React);

  module.exports = React.createClass({
    mixins: [FluxMixin],
    propTypes: {
      todo: React.PropTypes.object.isRequired
    },
    handleClick: function() {
      return this.getFlux().actions.toggleComplete(this.props.todo);
    },
    render: function() {
      var span;
      span = React.DOM.span;
      return span({
        onClick: this.handleClick
      }, this.props.todo.text);
    }
  });

}).call(this);