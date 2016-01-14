var PlayerInformation = React.createClass({
  render: function() {
    return (
      <div className="playerInformation">
        <div className="avatar">
          <img src="" alt="playerAvatar"/>
        </div>
        <div className="name">{this.props.player.name}</div>
        <div className="score">Score: 109,612,885</div>
        <div className="date">12/25/2016</div>
      </div>
    );
  }
});