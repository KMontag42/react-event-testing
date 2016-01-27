var EventMetaDisplay = React.createClass({
  getInitialState: function() {
    return { event: this.props.event };
  },

  render: function() {
    return (
      <div className="eventMetaDisplay">
        <h2>How to Play</h2>
        <ol>
          <li>Download [GameName] from the App Store</li>
          <li></li>
        </ol>
      </div>
    );
  }
});