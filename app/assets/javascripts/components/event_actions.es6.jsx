class EventActions {
  constructor() {
    this.generateActions(
      'initData',
      'updateEvent'
    );
  }
}

window.EventActions = window.alt.createActions(EventActions);
