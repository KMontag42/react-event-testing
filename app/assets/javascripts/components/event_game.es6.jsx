class EventGame extends React.Component {
  render () {
    return (
      <div>
        <img src="" alt="game logo"/>
        <div className="gameName">{this.props.game.title}</div>
        <div className="publisher">by {this.props.game.publisher_name}</div>
      </div>
    );
  }
}

EventGame.propTypes = {
  game: React.PropTypes.object
};
