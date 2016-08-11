import React from 'react';

const ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },

  componentDidMount: function() {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  render: function() {

    const { title, message } = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Some Title</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
