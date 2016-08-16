var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var github = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		console.log('getInitialState')
		return {isLoading: true, playerInfo: []}
	},
	componentDidMount: function () {
		var query = this.props.location.query;
		// Fetch info from github then update state
		github.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function(players) {
				// do something with players
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this))
	},
	componentWillMount: function () {
		console.log('componentWillMount');
	},
	componentWillReceiveProps: function () {
		console.log('componentWillReceiveProps');
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},
	render: function () {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
				/>
		);
	}
});

module.exports = ConfirmBattleContainer;
