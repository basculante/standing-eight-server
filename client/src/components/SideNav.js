import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../actions/index";
import M from "materialize-css";

class SideNav extends Component {
	componentDidMount() {
		this.props.fetchUser();
		document.addEventListener("DOMContentLoaded", function() {
			var elems = document.querySelectorAll(".sidenav");
			M.Sidenav.init(elems);
		});
	}

	renderLogin() {
		switch (this.props.user) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google" className="sidenav-close">
							<i className="material-icons">account_circle</i>Login with Google
						</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/api/logout" className="sidenav-close">
							<i className="material-icons">account_circle</i>Logout
						</a>
					</li>
				);
		}
	}

	render() {
		return (
			<div>
				<ul id="slide-out" className="sidenav">
					<li />
					<li>
						<Link to="/" className="sidenav-close">
							<i className="material-icons">home</i>Standing-Eight!
						</Link>
					</li>
					{this.renderLogin()}
					<li>
						<div className="divider" />
					</li>
					<li>
						<Link
							to={`/profile/${this.props.user._id}`}
							className="sidenav-close"
						>
							<i className="material-icons">dashboard</i>Dashboard
						</Link>
					</li>
					<li>
						<Link
							to={`/favorites/${this.props.user._id}`}
							href="#!"
							className="sidenav-close"
						>
							<i className="material-icons">list</i>Favorites
						</Link>
					</li>
					<li>
						<Link to="/programs" className="waves-effect sidenav-close">
							<i className="material-icons">fitness_center</i>Boxing Programs
						</Link>
					</li>
					<li>
						<div className="divider" />
					</li>
					<li>
						<a className="subheader" href="#!">
							Videos
						</a>
					</li>
					<li>
						<Link to="/offensevideos" className="waves-effect sidenav-close">
							<i className="material-icons">video_library</i>Offense
						</Link>
					</li>
					<li>
						<Link to="/defensevideos" className="waves-effect sidenav-close">
							<i className="material-icons">video_library</i>Defense
						</Link>
					</li>
				</ul>
				<a
					href="#!"
					data-target="slide-out"
					className="sidenav-trigger show-on-large"
				>
					<i className="material-icons">menu</i>
				</a>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth
	};
};

export default connect(
	mapStateToProps,
	{ fetchUser }
)(SideNav);
