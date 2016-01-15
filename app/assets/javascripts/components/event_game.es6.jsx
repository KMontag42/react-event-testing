class EventGame extends React.Component {
  render () {
    return (
      <div className="eventGame">
        <img src="" alt="game logo"/>
        <div className="gameName">
          {this.props.game.title}
          <br/>
          by {this.props.game.publisher_name}</div>
      </div>
    );
  }
}

EventGame.propTypes = {
  game: React.PropTypes.object
};
