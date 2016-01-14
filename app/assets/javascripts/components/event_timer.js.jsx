var EventTimer = React.createClass({
  getInitialState: function() {
    return { event: this.props.event };
  },

  render: function() {
    return (
      <div className="eventTimer">
        Tournament Begins In: <b>00:25:45</b>
      </div>
    );
  }
});