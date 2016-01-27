class EventVideoPlayer extends BaseComponent {
  // this is how we set state in es6 classes
  constructor(props) {
    super(props);
    this.state = {
        player: this.props.player
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    PlayerStore.listen(this.onChange);
    PlayerActions.initData(this.props);
  }

  componentDidMount() {
    $('video.replay').on('ended', function(e) {
      setTimeout(PlayerActions.updatePlayer, 2000);
    })
  }
  componentWillUnmount() {
    PlayerStore.unlisten(this.onChange);
  }

  onChange(state) {
    console.log(state);
    this.setState(state);
  }

  render () {
    return (
      <div>
        <PlayerInformation player={this.state.player}></PlayerInformation>
        <div className="video-container">
          <video src={this.state.player.video} className="replay" height="500" controls>
            <source src={this.state.player.video}/>
          </video>
        </div>
        <div className="btn btn-primary" onClick={this.onClick}>CHANGE PLAYER</div>
      </div>
    );
  }

  onClick() {
    PlayerActions.updatePlayer();
  }
}

EventVideoPlayer.propTypes = {
  player: React.PropTypes.object,
  video: React.PropTypes.string
};
