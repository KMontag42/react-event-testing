class EventMatchCode extends React.Component {
  render () {
    return (
      <div className="eventMatchCode text-center">
        Enter Match Code: <b>{this.props.matchCode}</b>
      </div>
    );
  }
}

EventMatchCode.propTypes = {
  matchCode: React.PropTypes.string
};
