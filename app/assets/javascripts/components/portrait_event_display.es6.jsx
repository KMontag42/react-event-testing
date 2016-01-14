class PortraitEventDisplay extends BaseComponent {
  // this is how we set state in es6 classes
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      player: this.props.player,
      game: this.props.game
    };
  }

  render () {
    return (
      <div>
        <div className="col-xs-4">
          <EventLogo logo={this.state.event.logo}></EventLogo>
          <EventInformation event={this.state.event}></EventInformation>
          <EventGame game={this.state.game}></EventGame>
        </div>
        <div className="col-xs-4">
          <EventMatchCode matchCode={this.state.event.match_code}></EventMatchCode>
          <EventVideoPlayer player={this.state.player} video={this.state.player.video}></EventVideoPlayer>
        </div>
        <div className="col-xs-4">
          <EventTimer></EventTimer>
          <EventMetaDisplay></EventMetaDisplay>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

PortraitEventDisplay.propTypes = {
  event: React.PropTypes.object
};
