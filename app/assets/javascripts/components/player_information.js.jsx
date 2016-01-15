var PlayerInformation = React.createClass({
  render: function() {
    return (
      <div className="playerInformation">
        <div className="avatar">
          <img src={this.props.player.avatar} alt="playerAvatar"/>
        </div>
        <div className="name">{this.props.player.name}</div>
        <div className="score">Score: {this.props.player.score}</div>
        <div className="date">{this.props.player.date}</div>
      </div>
    );
  }
});