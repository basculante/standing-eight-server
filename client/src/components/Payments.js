import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import SweetAlert from "sweetalert2-react";

class Payments extends Component {
	state = {
		alert: false
	};

	render() {
		if (!this.props.auth) {
			return (
				<div>
					<button
						className="btn"
						onClick={() => this.setState({ alert: true })}
					>
						Buy Program
					</button>
					<SweetAlert
						show={this.state.alert}
						title="Login with Google"
						text="Please login with Google to purchase program."
						onConfirm={() => this.setState({ alert: false })}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<StripeCheckout
						name="Standing-Eight"
						description="$0.99 for program"
						amount={99}
						token={token => this.props.handleToken(token)}
						stripeKey={process.env.REACT_APP_STRIPE_KEY}
					>
						<button className="btn">Buy Program</button>
					</StripeCheckout>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(
	mapStateToProps,
	actions
)(Payments);
