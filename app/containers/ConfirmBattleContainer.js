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
		console.log('componentDidMount');
		// Fetch info from github then update state
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
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
		return (<ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo}/>);
	}
});

module.exports = ConfirmBattleContainer;
