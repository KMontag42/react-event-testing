class PlayerStore {
  constructor() {
    this.bindListeners({
      onUpdatePlayer: PlayerActions.updatePlayer
    });
    this.state = {
      player : {}
    };
  }

  onInitData(props) {
    this.state.player = props.player;
  }

  onUpdatePlayer(player) {
    var self = this;
    $.ajax({
      type: 'GET',
      url: '/players',
      success: function(data) {
        self.state.player = data['player'];
        self.emitChange();
      }
    });
  }
}

window.PlayerStore = window.alt.createStore(PlayerStore, 'PlayerStore');
