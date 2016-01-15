class EventStore {
  constructor() {
    this.bindListeners({
      onUpdateEvent: EventActions.updateEvent
    });
    this.state = {
      event : {}
    };
  }

  onInitData(props) {
    this.state.event = props.event;
  }

  onUpdateEvent(event) {
    var self = this;
    $.ajax({
      type: 'GET',
      url: '/events',
      success: function(data) {
        self.state.event = data['event'];
        self.emitChange();
      }
    });
  }
}
//const EventStore = alt.createStore(EventStore, 'EventStore');
window.EventStore = window.alt.createStore(EventStore, 'EventStore');
