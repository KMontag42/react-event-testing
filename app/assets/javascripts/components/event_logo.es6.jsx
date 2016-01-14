class EventLogo extends React.Component {
  render () {
    return (
      <div>
        <img src="" alt="skillz logo"/>
        <img src={this.props.logo} alt="event logo"/>
      </div>
    );
  }
}

EventLogo.propTypes = {
  logo: React.PropTypes.string
};
