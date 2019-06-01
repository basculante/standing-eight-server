import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SideNav from "./SideNav";

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
				<div className="nav-wrapper row">
					<SideNav className="col s1"/>
					<Link to="/" className="left brand-logo col s6" style={{fontSize:'3vh'}}>
						Standing-Eight!
					</Link>
					
					<ul id="nav-mobile" className="right right hide-on-med-and-down">
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
