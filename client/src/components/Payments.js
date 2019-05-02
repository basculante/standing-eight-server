import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="Standing-Eight"
				description="$0.99 for program"
				amount={99}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">Buy Program</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);
