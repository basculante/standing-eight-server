import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { fetchFavoriteVideos } from "../actions/video";
import history from "../history";
import "./index.css";

import Header from "./Header";
import Landing from "./Landing";
import PaidPrograms from "./PaidPrograms";
import Program from "./Program";
import VideoPage from "./videos/VideoPage";
import Dashboard from "./Dashboard";
import Favorites from "./Favorites";
import HeavyBagForm from "./exerciseForms/HeavyBagForm";
import JumpRopeForm from "./exerciseForms/JumpRopeForm";
import RunForm from "./exerciseForms/RunForm";
import OffenseVideoPage from "./videos/OffenseVideoPage";
import DefenseVideoPage from "./videos/DefenseVideoPage";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		this.props.fetchFavoriteVideos();
	}

	render() {
		const PrivateProgram = ({ component: Component, ...rest }) => (
			<Route
				{...rest}
				render={props =>
					!this.props.auth.programPaid ? (
						<Redirect to="/" />
					) : (
						<Component {...props} />
					)
				}
			/>
		);

		return (
			<div className="app_page">
				<Router history={history}>
					<div>
						<Header />
						<Route path="/" component={Landing} exact />
						<Route path="/profile/:id" component={Dashboard} exact />
						<Route path="/heavybagform/:id" component={HeavyBagForm} exact />
						<Route path="/jumpropeform/:id" component={JumpRopeForm} exact />
						<Route path="/runform/:id" component={RunForm} exact />
						<Route path="/programs" component={PaidPrograms} exact />
						<PrivateProgram path="/program/paid" component={Program} exact />
						<Route path="/video/:id" component={VideoPage} exact />
						<Route path="/favorites/:id" component={Favorites} exact />
						<Route path="/offensevideos" component={OffenseVideoPage} exact />
						<Route path="/defensevideos" component={DefenseVideoPage} exact />
					</div>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(
	mapStateToProps,
	{ fetchUser, fetchFavoriteVideos }
)(App);
