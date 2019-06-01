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
			var instances = M.Sidenav.init(elems);
		});
	}

	render() {
		return (
			<div>
				<ul id="slide-out" className="sidenav">
					<li />
					<li>
						<Link to="/" href="#!" className="sidenav-close">
							<i className="material-icons">home</i>Standing-Eight!
						</Link>
					</li>
					<li>
						<div className="divider" />
					</li>
					<li>
						<Link to={`/profile/${this.props.user._id}`} href="#!" className="sidenav-close">
							<i className="material-icons">dashboard</i>Dashboard
						</Link>
					</li>
					<li>
						<Link href="#!">Second Link</Link>
					</li>
					<li>
						<div className="divider" />
					</li>
					<li>
						<Link className="subheader">Subheader</Link>
					</li>
					<li>
						<Link className="waves-effect" href="#!">
							Third Link With Waves
						</Link>
					</li>
				</ul>
				<Link
					href="#"
					data-target="slide-out"
					className="sidenav-trigger show-on-large"
				>
					<i className="material-icons">menu</i>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth
	}
}

export default connect(mapStateToProps, { fetchUser })(SideNav);
