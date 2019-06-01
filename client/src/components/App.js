import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import history from "../history";

import Header from "./Header";
import Landing from "./Landing";
import PaidPrograms from "./PaidPrograms";
import VideoPage from "./videos/VideoPage";
import Dashboard from "./Dashboard";
import ExerciseForm from "./exerciseForms/ExerciseForm";

const Videos = () => <h2>Videos</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="app_page">
				<Router history={history}>
					<div>
						<Header />
						<Route path="/" component={Landing} exact />
						<Route path="/profile/:id" component={Dashboard} exact />
						<Route
							path="/profile/formentry/:id"
							component={ExerciseForm}
							exact
						/>
						<Route path="/videos" component={Videos} exact />
						<Route path="/programs" component={PaidPrograms} exact />
						<Route path="/video/:id" component={VideoPage} exact />
					</div>
				</Router>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(App);
