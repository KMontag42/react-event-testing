class EventInformation extends React.Component {
  // this is how we set state in es6 classes
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    EventStore.listen(this.onChange);
    EventActions.initData(this.props);
  }

  componentWillUnmount() {
    EventStore.unlisten(this.onChange);
  }

  onChange(state) {
    console.log(state);
    this.setState(state);
  }

  render () {
    return (
      <div>
        <div className="title">{this.state.event.title}</div>
        <div className="time">{this.state.event.time}</div>
        <hr/>
        <div className="prize">{this.state.event.prize}</div>
        <div className="inPrizes">IN PRIZES</div>
        <div className="guaranteed">GUARANTEED</div>
        <div onClick={this.onClick} className="btn btn-success">CHANGE ME</div>
      </div>
    );
  }

  onClick() {
    EventActions.updateEvent();
  }
}

EventInformation.propTypes = {
  event: React.PropTypes.object
};
