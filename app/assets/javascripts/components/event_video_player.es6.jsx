class EventVideoPlayer extends React.Component {
  render () {
    return (
      <div>
        <PlayerInformation player={this.props.player}></PlayerInformation>
        <video className="replay" autoplay controls>
          <source src={this.props.video}/>
        </video>
      </div>
    );
  }
}

EventVideoPlayer.propTypes = {
  player: React.PropTypes.object,
  video: React.PropTypes.string
};
