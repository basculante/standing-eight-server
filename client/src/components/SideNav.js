import React, { Component } from 'react';
import M from 'materialize-css';

class SideNav extends Component {
	componentDidMount() {
		 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
	}

	render() {
		return (
			<div>
				<ul id="slide-out" className="sidenav">
					
				</ul>

			</div>
  
		);
	}
}

export default SideNav;