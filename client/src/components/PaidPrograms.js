import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import "./PaidPrograms.css";

class PaidPrograms extends React.Component {
	renderProgramBtn() {
		if (!this.props.auth.programPaid) {
			return (
				<div className="purchase-btn">
					<Payments />
				</div>
			);
		} else {
			return (
				<div className="purchase-btn">
					<Link to="/program/paid">
						<button className="waves-effect waves-light btn">
							Go to Program
						</button>
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="program-page">
				<div className="program-content">
					<h1>Full Boxing Program</h1>
					<h5>Includes a running, jumprope, and boxing plan.</h5>
					<h5>All for $0.99.</h5>
				</div>
				<div className="container row">
					<div className="col s12 m4 l4">
						<div className="card exercise">
							<div className="card-image">
								<img src={require("./images/boxing.jpg")} alt="boxing-pic" />
								<span className="card-title">Boxing</span>
							</div>
						</div>
					</div>
					<div className="col s12 m4 l4">
						<div className="card exercise">
							<div className="card-image">
								<img src={require("./images/jumprope.jpg")} alt="jumprope-pic"/>
								<span className="card-title">Jump Rope</span>
							</div>
						</div>
					</div>
					<div className="col s12 m4 l4">
						<div className="card exercise">
							<div className="card-image">
								<img src={require("./images/running.jpg")} alt="running-pic"/>
								<span className="card-title">Running</span>
							</div>
						</div>
					</div>
				</div>
				{this.renderProgramBtn()}
				<div className="program-warning">
					<p>
						Enter 4242 4242 4242 4242 for card number and any email/cvc/exp date
						to purchase.
					</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps)(PaidPrograms);
