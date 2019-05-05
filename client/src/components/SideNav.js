import React, { Component } from "react";
import M from "materialize-css";

class SideNav extends Component {
	componentDidMount() {
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
						<a href="#!">
							<i className="material-icons">cloud</i>First Link With Icon
						</a>
					</li>
					<li>
						<a href="#!">Second Link</a>
					</li>
					<li>
						<div className="divider" />
					</li>
					<li>
						<a className="subheader">Subheader</a>
					</li>
					<li>
						<a className="waves-effect" href="#!">
							Third Link With Waves
						</a>
					</li>
				</ul>
				<a href="#" data-target="slide-out" className="sidenav-trigger">
					<i className="material-icons">menu</i>
				</a>
			</div>
		);
	}
}

export default SideNav;
