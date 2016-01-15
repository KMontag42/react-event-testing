class EventLogo extends React.Component {
  render () {
    return (
      <div className="eventLogos">
        <img src="" alt="skillz logo" className="logo"/> |
        <img src={this.props.logo} alt="event logo" className="logo"/>
        <hr/>
      </div>
    );
  }
}

EventLogo.propTypes = {
  logo: React.PropTypes.string
};
