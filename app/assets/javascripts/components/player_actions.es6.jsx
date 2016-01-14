class PlayerActions {
  constructor() {
    this.generateActions(
      'initData',
      'updatePlayer'
    );
  }
}

window.PlayerActions = window.alt.createActions(PlayerActions);
