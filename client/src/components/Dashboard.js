import React from "react";
import { connect } from "react-redux";
import HeavyBagLineGraph from "./graphs/HeavyBagLineGraph";

class Dashboard extends React.Component {
	render() {
		return (
			<div className="container">
				<HeavyBagLineGraph user={this.props.user} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: ownProps.match.params.id
	};
};

export default connect(mapStateToProps)(Dashboard);
