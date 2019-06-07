import React from "react";
import { connect } from "react-redux";

class Footer extends React.Component {
	render() {
		return (
			<div>
				<footer
					className="page-footer red darken-4"
					style={{ padding: "20px", textAlign: "center" }}
				>
					<div>
						<div className="container">© 2019 Standing-Eight</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default connect(null)(Footer);
