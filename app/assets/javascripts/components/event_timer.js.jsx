var EventTimer = React.createClass({
  getInitialState: function() {
    return { event: this.props.event };
  },

  componentDidMount: function() {
    var self = this;
    $(this.refs.timer).countdown(moment('2/22/2016').toDate())
      .on('update.countdown', function(event) {
        self.refs.timerDisplay.innerHTML = event.strftime('%-d:%H:%M:%S');
      });
  },

  render: function() {
    return (
      <div className="eventTimer text-center" ref="timer">
        Tournament Begins In: <b ref="timerDisplay">00:25:45</b>
      </div>
    );
  }
});