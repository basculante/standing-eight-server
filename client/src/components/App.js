import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import PaidPrograms from "./PaidPrograms";
const Dashboard = () => <h2>Dashboard</h2>;
const Videos = () => <h2>Videos</h2>;


class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route path="/" component={Landing} exact />
						<Route path="/profile" component={Dashboard} exact />
						<Route path="/videos" component={Videos} exact />
						<Route path="/programs" component={PaidPrograms} exact />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
