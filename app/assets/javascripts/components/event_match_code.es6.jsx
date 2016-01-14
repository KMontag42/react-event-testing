class EventMatchCode extends React.Component {
  render () {
    return (
      <div>
        Enter Match Code: <b>{this.props.matchCode}</b>
      </div>
    );
  }
}

EventMatchCode.propTypes = {
  matchCode: React.PropTypes.string
};
