import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="left brand-logo">
						Standing-Eight!
					</Link>
					<ul className="right">
						<li><Link to="/programs">Programs</Link></li>
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
