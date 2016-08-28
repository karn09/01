var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
	routes,
	document.getElementById('app')
);


// var HelloUser = React.createClass({
//   render: function(){
//     return (
//       <div> Hello, {this.props.name}</div>
//     )
//   }
// });
//
// var FriendsContainer = React.createClass({
// 	render: function() {
// 		var name = "John Nieves";
// 		var friends = ["Layla", "Matt"];
//
// 		return (
// 			<div>
// 				<h3> Name: {name} </h3>
// 				<ShowList names={friends}></ShowList>
// 			</div>
// 		)
//
// 	}
// });
//
// // ReactDOM.render(<HelloUser name="John"/>, document.getElementById('app'));
//
// var ShowList = React.createClass({
// 	render: function() {
// 		var listItems = this.props.names.map(function(friend) {
// 			return <li> {friend} </li>;
// 		})
// 		return (
// 			<div>
// 				<h3> Friends </h3>
// 				<ul>
// 					{listItems}
// 				</ul>
// 			</div>
// 		)
// 	}
// });
//
// var ProfilePic = React.createClass({
// 	render: function() {
// 		return (
// 			<img src={this.props.imageUrl} style={{height: 100, width: 100}} />
// 		)
// 	}
// });
//
// // can be re-written as normal function
// // var ProfilePic = function	(props) {
// // 	return <img src={'https://photo.fb.com' + props.username} />
// // }
//
//
// var Link = React.createClass({
//
// 	changeURL: function() {
// 		window.location.replace(this.props.href)
// 	},
//
// 	render: function() {
// 		return (
// 			<span
// 				style={{ color: 'blue', cursor: 'pointer' }}
// 				onClick = {this.changeURL}>
// 				{this.props.children}
// 			</span>
// 		)
// 	}
// })

// var ProfileLink = React.createClass({
// 	render: function () {
// 		return (
// 			<Link href={'https://www.github.com/' + this.props.username}>
// 				{this.props.username}
// 			</Link>
// 		)
// 	}
// });

// can be re-written as normal function
// var ProfileLink = function(props) {
// 	return (
// 		<a href={'https://www.fb.com' + props.username}>
// 			{props.username}
// 		</a>
// 	)
// }

// var Avatar = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<ProfilePic imageUrl={this.props.imageUrl} />
// 				<ProfileLink username={this.props.username} />
// 			</div>
// 		)
// 	}
// });

// re-written as normal function
// var Avatar = function (props) {
// 	return (
// 		<div>
// 			<ProfilePic username={props.username}/>
// 			<ProfileLink username={props.username}/>
// 		</div>
// 	)
// }
// ReactDOM.render(<Avatar imageUrl="https://avatars3.githubusercontent.com/u/3743119?v=3&s=460" username="karn09"/>, document.getElementById('app'));
